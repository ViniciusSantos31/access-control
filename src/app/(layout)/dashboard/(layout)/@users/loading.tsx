import { Skeleton } from "@/components/ui/skeleton";

export default function DatabasesLoading() {
  return (
    <>
      <Skeleton className="bg-muted/50 border-muted-foreground/20 h-full min-h-80 w-full rounded border" />
    </>
  );
}
