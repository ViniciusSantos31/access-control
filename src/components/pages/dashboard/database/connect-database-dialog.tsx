import { BaseDialogProps, Dialog } from "@/components/ui/dialog";
import { ConnectDatabaseForm } from "./connect-database-form";

export const ConnectDatabaseDialog = (props: BaseDialogProps) => {
  return (
    <Dialog
      {...props}
      title="Conectar banco de dados"
      description="Conecte um novo banco de dados para começar a usar o Access."
      content={<ConnectDatabaseForm />}
    />
  );
};
