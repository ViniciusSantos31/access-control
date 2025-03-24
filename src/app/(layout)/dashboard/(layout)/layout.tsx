import { Separator } from "@/components/ui/separator";
import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
  databases: React.ReactNode;
  users: React.ReactNode;
};

export default function DashboardLayout({
  children,
  databases,
  users,
}: DashboardLayoutProps) {
  return (
    <>
      {children}
      <Separator className="my-5" />
      <div className="flex h-full w-full flex-col gap-6 xl:flex-row">
        {databases}
        {users}
      </div>
    </>
  );
}
