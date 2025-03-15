import { AppSidebar } from "@/components/shared/app-sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <AppSidebar />
      <main className="flex h-full w-full flex-col overflow-auto p-6">
        {children}
      </main>
    </div>
  );
}
