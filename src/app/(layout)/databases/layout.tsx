import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DatabasesLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="flex h-full w-full flex-col gap-2 overflow-auto p-6">
      {children}
    </main>
  );
}
