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

import { PiGameControllerDuotone } from "react-icons/pi";

export const AppSidebar = () => {
  const { open, isMobile } = useSidebar();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <div
          className={cn(
            "border-muted flex w-full items-center justify-center gap-2 border-b p-0 py-6",
            (open || isMobile) && "p-6",
          )}
        >
          <span
            className={cn(
              "hidden text-2xl font-bold opacity-0 transition-opacity",
              (open || isMobile) && "flex opacity-100",
            )}
          >
            Access
          </span>
          <span
            className={cn(
              "scale-75 rotate-0 transition-transform",
              (open || isMobile) && "scale-100 rotate-12",
            )}
          >
            <PiGameControllerDuotone size={48} />
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent className="overflow-x-hidden">
        <SidebarGroup>
          <NavItems />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="border-muted mt-auto flex w-full items-center justify-between gap-2 overflow-x-hidden border-t py-4">
          <UserDropdown />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};
