import { Button } from "@/components/ui/button";
import { Popover } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { LucideIcon, Pen, Trash, Unplug } from "lucide-react";

type DatabaseActionsProps = {
  children: React.ReactNode;
};

const ActionItem = ({
  title,
  action,
  icon: Icon,
  className,
}: {
  title: string;
  action?: () => void;
  icon: LucideIcon;
  className?: string;
}) => {
  return (
    <li className="w-full rounded-md">
      <Button
        variant={"ghost"}
        className={cn("w-full min-w-32 justify-start text-left", className)}
        onClick={action}
      >
        <Icon size={16} className="action-item-icon" />
        {title}
      </Button>
    </li>
  );
};

export const DatabaseActions = ({ children }: DatabaseActionsProps) => {
  return (
    <Popover
      content={
        <ul className="flex w-fit flex-col gap-2">
          <ActionItem title="Editar" icon={Pen} />
          <ActionItem title="Desconectar" icon={Unplug} />
          <Separator />
          <ActionItem title="Excluir" icon={Trash} className="text-red-500" />
        </ul>
      }
    >
      {children}
    </Popover>
  );
};
