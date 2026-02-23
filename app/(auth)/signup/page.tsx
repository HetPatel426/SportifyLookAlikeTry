import Link from "next/link";

import { signup } from "@/app/(auth)/actions";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{
    error?: string;
  }>;
}) {
  const { error } = await searchParams;

  return (
    <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-6 shadow-sm">
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">
          Create your account
        </h1>
        <p className="mt-1 text-sm text-zinc-400">
          Start uploading and streaming your own music.
        </p>
      </div>

      {error ? (
        <div className="mb-4 rounded-md border border-red-900/60 bg-red-950/40 px-3 py-2 text-sm text-red-200">
          {error}
        </div>
      ) : null}

      <form action={signup} className="flex flex-col gap-3">
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-zinc-300">Email</span>
          <Input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-zinc-300">Password</span>
          <Input
            name="password"
            type="password"
            autoComplete="new-password"
            required
          />
        </label>
        <Button type="submit" className="mt-2">
          Create account
        </Button>
      </form>

      <p className="mt-4 text-sm text-zinc-400">
        Already have an account?{" "}
        <Link href="/login" className="text-zinc-100 hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  );
}

