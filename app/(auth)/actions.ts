"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { z } from "zod";

import { createSupabaseServerClient } from "@/lib/supabase/server";

const AuthSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function login(formData: FormData) {
  const parsed = AuthSchema.safeParse({
    email: String(formData.get("email") ?? ""),
    password: String(formData.get("password") ?? ""),
  });

  if (!parsed.success) {
    redirect("/login?error=Invalid%20email%20or%20password");
  }

  const next = String(formData.get("next") ?? "").trim();

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signInWithPassword(parsed.data);

  if (error) {
    redirect(`/login?error=${encodeURIComponent(error.message)}`);
  }

  if (next.startsWith("/")) redirect(next);
  redirect("/");
}

export async function signup(formData: FormData) {
  const parsed = AuthSchema.safeParse({
    email: String(formData.get("email") ?? ""),
    password: String(formData.get("password") ?? ""),
  });

  if (!parsed.success) {
    redirect("/signup?error=Use%20a%20valid%20email%20and%20a%20password%20(8%2B%20chars)");
  }

  const hdrs = await headers();
  const origin =
    hdrs.get("x-forwarded-proto") && hdrs.get("x-forwarded-host")
      ? `${hdrs.get("x-forwarded-proto")}://${hdrs.get("x-forwarded-host")}`
      : hdrs.get("origin") ?? "";

  const emailRedirectTo = origin ? `${origin}/auth/callback` : undefined;

  const supabase = await createSupabaseServerClient();
  const { error } = await supabase.auth.signUp({
    ...parsed.data,
    options: emailRedirectTo ? { emailRedirectTo } : undefined,
  });

  if (error) {
    redirect(`/signup?error=${encodeURIComponent(error.message)}`);
  }

  redirect("/login?success=Check%20your%20email%20to%20confirm%20your%20account");
}

