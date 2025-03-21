"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { MoreVertical } from "lucide-react";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Função",
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
