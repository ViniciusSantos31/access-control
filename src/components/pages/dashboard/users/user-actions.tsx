import { buttonVariants } from "@/components/ui/button";
import { Popover } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { LucideIcon, Pen, Trash, UserX } from "lucide-react";
import { DeleteUserDialog } from "./delete-user-dialog";
import { DisableUserDialog } from "./disable-user-dialog";

type UserActionProps = {
  children: React.ReactNode;
};

const ActionItem = ({
  title,
  icon: Icon,
  className,
}: {
  title: string;
  icon: LucideIcon;
  className?: string;
}) => {
  return (
    <li
      className={cn(
        buttonVariants({ variant: "ghost", className }),
        "w-full min-w-32 items-center justify-start rounded-md text-left",
      )}
    >
      <Icon
        size={16}
        className="action-item-icon"
      />
      {title}
    </li>
  );
};

export const UserActions = ({ children }: UserActionProps) => {
  return (
    <Popover
      content={
        <ul className="flex w-fit flex-col gap-2">
          <ActionItem
            title="Editar"
            icon={Pen}
          />
          <DisableUserDialog>
            <ActionItem
              title="Desativar"
              icon={UserX}
            />
          </DisableUserDialog>
          <Separator />
          <DeleteUserDialog>
            <ActionItem
              title="Excluir"
              icon={Trash}
              className="text-red-500"
            />
          </DeleteUserDialog>
        </ul>
      }
    >
      {children}
    </Popover>
  );
};
