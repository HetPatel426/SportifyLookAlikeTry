import Link from "next/link";

import { logout } from "@/app/(app)/actions";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

type SidebarProps = {
  className?: string;
};

export function Sidebar({ className }: SidebarProps) {
  return (
    <aside
      className={cn(
        "flex h-full w-64 flex-col gap-4 border-r border-zinc-900 bg-zinc-950 p-4",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          SoundVault
        </Link>
      </div>

      <nav className="flex flex-col gap-1 text-sm">
        <Link
          href="/library"
          className="rounded-md px-3 py-2 text-zinc-200 hover:bg-zinc-900"
        >
          Library
        </Link>
        <Link
          href="/search"
          className="rounded-md px-3 py-2 text-zinc-200 hover:bg-zinc-900"
        >
          Search
        </Link>
        <Link
          href="/playlists"
          className="rounded-md px-3 py-2 text-zinc-200 hover:bg-zinc-900"
        >
          Playlists
        </Link>
      </nav>

      <div className="mt-auto border-t border-zinc-900 pt-4">
        <form action={logout}>
          <Button type="submit" variant="ghost" className="w-full">
            Sign out
          </Button>
        </form>
      </div>
    </aside>
  );
}

