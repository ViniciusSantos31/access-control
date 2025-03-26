import {
  AlertDialog,
  AlertDialogBaseProps,
} from "@/components/ui/alert-dialog";

export const DeleteUserDialog = (props: AlertDialogBaseProps) => {
  return (
    <AlertDialog
      {...props}
      onAction={() => {}}
      title="Você tem certeza que deseja excluir este usuário?"
      description="Esta ação não pode ser desfeita. Isso excluirá permanentemente sua conta e removerá seus dados de nossos servidores."
      cancelText="Não, cancelar"
      actionText="Sim, excluir"
    />
  );
};
