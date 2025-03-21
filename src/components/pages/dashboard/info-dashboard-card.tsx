import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

type InfoDashboardCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const InfoDashboardCard = ({
  title,
  description,
  icon: Icon,
}: InfoDashboardCardProps) => {
  return (
    <div className="border-muted flex h-fit w-full min-w-max flex-1 items-center rounded border p-4 md:max-w-1/2">
      <div className="flex flex-1 flex-col">
        <span className="flex items-start gap-2">
          <Icon size={24} />
          <h2 className="text-xl font-bold">{title}</h2>
        </span>
        <p className="text-muted-foreground block">{description}</p>
      </div>
      <Button variant={"link"}>Ver todos</Button>
    </div>
  );
};
