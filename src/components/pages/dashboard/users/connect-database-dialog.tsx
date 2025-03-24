"use client";

import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
// import { ConnectDatabaseForm } from "./form/connect-database-form";

export const AddUserDialog = (props: BaseDialogProps) => {
  return (
    <Dialog
      {...props}
      title="Adicionar usuário"
      content={<h1>Novo usuário</h1>}
    />
  );
};
