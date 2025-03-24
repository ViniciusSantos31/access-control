import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="skeleton"
      className={cn(
        "bg-muted/50 border-muted-foreground/20 animate-pulse rounded-md border",
        className,
      )}
      {...props}
    />
  );
}

export { Skeleton };
