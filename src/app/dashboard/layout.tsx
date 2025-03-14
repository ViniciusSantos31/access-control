import { NavItems } from "@/components/pages/dashboard/nav-items";
import { UserDropdown } from "@/components/pages/dashboard/user-dropdown";
import { ModeToggle } from "@/components/shared/theme-toggle";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="grid h-screen w-full grid-cols-[300px_1fr] overflow-hidden">
      <aside className="border-muted flex h-full w-full flex-col items-center border-r">
        <div className="border-muted flex w-full items-center justify-center gap-2 border-b p-6">
          <span className="text-2xl font-bold">Access</span>
          <span className="rotate-12 rounded-md border-2 border-white p-1 py-2">
            CTRL
          </span>
        </div>
        <NavItems />
        <div className="border-muted mt-auto flex w-full items-center justify-between gap-2 border-t px-3 py-4">
          <UserDropdown />
          <ModeToggle />
        </div>
      </aside>
      <main className="flex h-full w-full flex-col overflow-auto p-6">
        {children}
      </main>
    </div>
  );
}
