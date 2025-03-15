import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

type ActionCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const cardColorStyles =
  "bg-muted/50 border-muted-foreground/20 border cursor-pointer transition-all hover:brightness-95 dark:hover:brightness-125";

export const cardVariants = cva([
  "aspect-square max-h-[250px] min-w-[250px] flex flex-1 items-center justify-center rounded 2xl:flex-1 relative overflow-hidden outline-none",
]);

export const ActionCard = ({
  title,
  description,
  icon: Icon,
}: ActionCardProps) => {
  return (
    <button className={cn(cardVariants(), cardColorStyles)} type="button">
      <Icon className="size-8" />
      <div className="from-background/80 absolute bottom-0 left-0 w-full bg-gradient-to-t p-3 text-left">
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
