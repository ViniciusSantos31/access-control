"use client";

import { cn } from "@/lib/utils";
import { NavItems } from "../pages/dashboard/nav-items";
import { UserDropdown } from "../pages/dashboard/user-dropdown";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  useSidebar,
} from "../ui/sidebar";

export const AppSidebar = () => {
  const { open } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div
          className={cn(
            "border-muted flex w-full items-center justify-center gap-2 border-b p-0 py-6",
            open && "p-6",
          )}
        >
          <span
            className={cn(
              "hidden text-2xl font-bold opacity-0 transition-opacity",
              open && "flex opacity-100",
            )}
          >
            Access
          </span>
          <span
            className={cn(
              "border-foreground scale-75 rotate-0 rounded-md border-2 p-1 px-3 py-2 transition-transform",
              open && "scale-100 rotate-12",
            )}
          >
            CTRL
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="overflow-x-hidden">
        <SidebarGroup>
          <NavItems />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="border-muted mt-auto flex w-full items-center justify-between gap-2 border-t py-4">
          <UserDropdown />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
