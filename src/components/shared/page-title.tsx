"use client";

import { cn } from "@/lib/utils";
import { PanelLeft } from "lucide-react";
import { SIDEBAR_KEYBOARD_SHORTCUT, useSidebar } from "../ui/sidebar";

type PageTitleProps = {
  title: string;
};

export const PageTitle = ({ title }: PageTitleProps) => {
  const { toggleSidebar } = useSidebar();

  const hasWindow = typeof window !== "undefined";

  const isMac = /Mac|iPod|iPhone|iPad/.test(
    hasWindow ? window.navigator.platform : "",
  );

  return (
    <div className="mb-6 flex items-center justify-start gap-2">
      <button
        className="border-muted hover:bg-accent flex cursor-pointer items-center justify-start gap-2 rounded-md border p-2"
        onClick={toggleSidebar}
      >
        <PanelLeft size={32} className="!size-6" />
        <kbd className="bg-muted text-muted-foreground pointer-events-none inline-flex h-5 items-center justify-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none">
          <span className={cn(isMac && "mt-0.5 text-sm")}>
            {isMac ? "⌘" : "Ctrl"}
          </span>
          <span>{SIDEBAR_KEYBOARD_SHORTCUT}</span>
        </kbd>
      </button>
      <h1 className="font-title text-4xl font-bold">{title}</h1>
    </div>
  );
};
