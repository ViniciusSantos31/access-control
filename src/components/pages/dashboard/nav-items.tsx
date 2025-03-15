"use client";

import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import { Tooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Database, FolderKey, Gauge, UsersRound } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();
  const { open } = useSidebar();

  const navItems = [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: Gauge,
    },
    {
      label: "Banco de dados",
      href: "/dashboard/settings",
      icon: Database,
    },
    {
      label: "Permissões",
      href: "/dashboard/permissions",
      icon: FolderKey,
    },
    {
      label: "Grupos",
      href: "/dashboard/groups",
      icon: UsersRound,
    },
  ];

  return (
    <nav className="flex w-full flex-col gap-2 px-2 py-4">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href);

        return (
          <Link key={item.href} href={item.href}>
            <Tooltip content={item.label} key={item.href} hiddenTooltip={open}>
              <Button
                variant={"ghost"}
                className={cn(
                  "aspect-square w-full justify-center gap-2",
                  isActive && "bg-accent",
                  open && "aspect-auto h-auto justify-start",
                )}
              >
                <item.icon size={16} />
                <span
                  className={cn(
                    "hidden opacity-0 transition-all",
                    open && "block opacity-100",
                  )}
                >
                  {item.label}
                </span>
              </Button>
            </Tooltip>
          </Link>
        );
      })}
    </nav>
  );
};
