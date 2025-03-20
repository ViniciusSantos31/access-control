"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";
import { ClassNameValue } from "tailwind-merge";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

type DatabaseStatus = "offline" | "connected" | "disconnected";

export type Database = {
  id: string;
  name: string;
  status: DatabaseStatus;
};

export const databasesColumns: ColumnDef<Database>[] = [
  {
    accessorKey: "id",
    cell(props) {
      const id = props.getValue() as string;

      return <span>{id}</span>;
    },
    header: "ID",
  },
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "status",
    cell(props) {
      const status = props.getValue() as DatabaseStatus;

      const statusColor: Record<
        DatabaseStatus,
        {
          [key: string]: ClassNameValue;
        }
      > = {
        offline: {
          indicator: "bg-gray-500 animate-none",
          text: "text-primary",
        },
        connected: {
          indicator: "bg-green-500 animate-none",
          text: "text-green-500",
        },
        disconnected: {
          indicator: "bg-red-500 animate-none",
          text: "text-red-500",
        },
      };

      return (
        <span className={"inline-flex items-center gap-2"}>
          <span
            className={cn(
              "size-2 animate-pulse rounded-full",
              statusColor[status].indicator,
            )}
          />
          <span className={cn(statusColor[status].text)}>{status}</span>
        </span>
      );
    },
    header: "Status",
  },
  {
    accessorKey: "actions",
    cell() {
      return (
        <Button variant={"ghost"} size={"icon"} className="ml-auto flex">
          <MoreVertical size={16} />
        </Button>
      );
    },
    header() {
      return <span className="flex justify-end text-right">Ações</span>;
    },
  },
];
