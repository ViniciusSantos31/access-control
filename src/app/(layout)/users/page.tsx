"use client";

import { AddUserDialog } from "@/components/pages/dashboard/users/connect-database-dialog";
import { UsersFilters } from "@/components/pages/dashboard/users/filters";
import { UsersList } from "@/components/pages/dashboard/users/users-list";
import { PageTitle } from "@/components/shared/page-title";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { UserCog } from "lucide-react";

export default function UsersPage() {
  return (
    <>
      <PageTitle title="Usuários" />
      <div className="flex h-full w-full flex-col overflow-hidden">
        <div className="border-muted mb-3 flex w-full flex-col items-end gap-3 rounded-md border px-3 py-2">
          <AddUserDialog>
            <Button>
              <UserCog />
              Adicionar usuário
            </Button>
          </AddUserDialog>
          <Separator />
          <div className="ml-auto flex h-fit w-full flex-1 items-start justify-end gap-3 md:items-center">
            <UsersFilters />
          </div>
        </div>
        <UsersList />
      </div>
    </>
  );
}

export const dynamic = "force-dynamic";
