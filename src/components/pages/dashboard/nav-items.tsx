"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Database, FolderKey, Gauge } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const NavItems = () => {
  const pathname = usePathname();

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
      href: "/dashboard/profile",
      icon: FolderKey,
    },
  ];

  return (
    <nav className="flex w-full flex-col gap-2 px-2 py-4">
      {navItems.map((item) => {
        const isActive = pathname.startsWith(item.href);

        return (
          <Link key={item.href} href={item.href}>
            <Button
              variant={"ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isActive && "bg-accent",
              )}
            >
              <item.icon size={16} />
              <span>{item.label}</span>
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};
