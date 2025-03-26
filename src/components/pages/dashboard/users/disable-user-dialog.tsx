import {
  AlertDialog,
  AlertDialogBaseProps,
} from "@/components/ui/alert-dialog";

export const DisableUserDialog = (props: AlertDialogBaseProps) => {
  return (
    <AlertDialog
      {...props}
      onAction={() => {}}
      title="Tem certeza de que deseja desativar este usuário?"
      description="Esta ação pode ser revertida, mas o usuário não poderá acessar o sistema enquanto estiver desativado."
      cancelText="Não, cancelar"
      actionText="Sim, desativar"
    />
  );
};
