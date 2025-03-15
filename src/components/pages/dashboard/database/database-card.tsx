import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type ActionCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const cardColorStyles =
  "bg-muted/50 border-muted-foreground/20 border cursor-pointer transition-all hover:brightness-95 dark:hover:brightness-125 px-3 md:px-0 h-full";

export const cardVariants = cva([
  "md:aspect-square h-full max-h-[250px] h-fit flex flex-1 w-full md:max-w-none items-center justify-center rounded 2xl:flex-1 relative overflow-hidden outline-none",
]);

export const ActionCard = ({
  title,
  description,
  icon: Icon,
}: ActionCardProps) => {
  return (
    <button className={cn(cardVariants(), cardColorStyles)} type="button">
      <Icon className="size-8" />
      <div className="md:from-background/80 relative bottom-0 left-0 w-full p-3 text-left md:absolute md:bg-gradient-to-t">
        <p className="font-title text-sm font-semibold">{title}</p>
        <span className="text-muted-foreground block text-xs">
          {description}
        </span>
      </div>
    </button>
  );
};

type LinkActionCardProps = ActionCardProps & {
  href: string;
};

export const LinkActionCard = ({ href, ...props }: LinkActionCardProps) => {
  return (
    <Link href={href} passHref className={cardVariants()}>
      <ActionCard {...props} />
    </Link>
  );
};
