import Link from "next/link";

import { login } from "@/app/(auth)/actions";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{
    error?: string;
    success?: string;
    next?: string;
  }>;
}) {
  const { error, success, next } = await searchParams;

  return (
    <div className="rounded-xl border border-zinc-900 bg-zinc-950 p-6 shadow-sm">
      <div className="mb-6">
        <h1 className="text-xl font-semibold tracking-tight">Welcome back</h1>
        <p className="mt-1 text-sm text-zinc-400">
          Sign in to your SoundVault.
        </p>
      </div>

      {error ? (
        <div className="mb-4 rounded-md border border-red-900/60 bg-red-950/40 px-3 py-2 text-sm text-red-200">
          {error}
        </div>
      ) : null}
      {success ? (
        <div className="mb-4 rounded-md border border-emerald-900/60 bg-emerald-950/40 px-3 py-2 text-sm text-emerald-200">
          {success}
        </div>
      ) : null}

      <form action={login} className="flex flex-col gap-3">
        <input type="hidden" name="next" value={next ?? ""} />
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-zinc-300">Email</span>
          <Input name="email" type="email" autoComplete="email" required />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-xs font-medium text-zinc-300">Password</span>
          <Input
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </label>
        <Button type="submit" className="mt-2">
          Sign in
        </Button>
      </form>

      <p className="mt-4 text-sm text-zinc-400">
        New here?{" "}
        <Link href="/signup" className="text-zinc-100 hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  );
}

