import { Sidebar } from "@/components/layout/Sidebar";
import { cn } from "@/lib/utils";

type AppShellProps = {
  children: React.ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen">
      <Sidebar className="hidden md:flex" />
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-zinc-900 bg-zinc-950 px-4 py-3 md:hidden">
          <div className="text-sm font-semibold tracking-tight">SoundVault</div>
          <div className="text-xs text-zinc-400">MVP</div>
        </header>

        <main className={cn("flex-1 px-4 py-6 pb-28")}>{children}</main>

        <div className="fixed inset-x-0 bottom-0 border-t border-zinc-900 bg-zinc-950/95 px-4 py-3 backdrop-blur">
          <div className="mx-auto flex w-full max-w-5xl items-center justify-between">
            <div className="min-w-0">
              <div className="truncate text-sm font-medium text-zinc-100">
                Nothing playing
              </div>
              <div className="truncate text-xs text-zinc-500">
                Player UI comes next
              </div>
            </div>
            <div className="text-xs text-zinc-500">00:00 / 00:00</div>
          </div>
        </div>
      </div>
    </div>
  );
}

