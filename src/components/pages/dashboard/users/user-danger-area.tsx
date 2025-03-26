"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Trash, UserX } from "lucide-react";
import { DeleteUserDialog } from "./delete-user-dialog";
import { DisableUserDialog } from "./disable-user-dialog";

export const UserDangerArea = () => {
  return (
    <section className="border-destructive mt-4 flex w-full flex-col gap-1 rounded-md border-2 p-3">
      <div className="flex flex-col items-start justify-between">
        <h4 className="font-title text-destructive text-lg font-bold">
          Área de risco
        </h4>
        <span className="text-muted-foreground text-sm">
          Algumas ações realizadas nesta área podem ser irreversíveis. Proceda
          com cautela.
        </span>
      </div>
      <Separator className="my-5" />
      <section className="flex w-full items-center">
        <div className="flex-1">
          <h5 className="font-title text-sm font-bold">Desativar usuário</h5>
          <p className="text-muted-foreground text-sm">
            Ao desativar o usuário, ele não poderá acessar o sistema.
          </p>
        </div>
        <DisableUserDialog asChild>
          <Button variant={"secondary"}>
            <UserX />
            Desativar usuário
          </Button>
        </DisableUserDialog>
      </section>
      <Separator className="my-5" />
      <section className="flex w-full items-center">
        <div className="flex-1">
          <h5 className="font-title text-sm font-bold">Excluir usuário</h5>
          <p className="text-muted-foreground text-sm">
            Ao excluir o usuário, todas as informações serão perdidas.
          </p>
        </div>
        <DeleteUserDialog asChild>
          <Button variant={"destructive"}>
            <Trash />
            Excluir usuário
          </Button>
        </DeleteUserDialog>
      </section>
    </section>
  );
};
