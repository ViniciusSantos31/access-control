"use client";

import { AppSidebar } from "@/components/shared/app-sidebar";
import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="flex h-dvh w-full overflow-hidden">
      <AppSidebar />
      <main className="flex h-full w-full flex-col gap-2 overflow-auto p-6">
        {children}
      </main>
    </div>
  );
}
