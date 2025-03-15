import { Skeleton } from "@/components/ui/skeleton";

export default function DatabasesLoading() {
  return (
    <>
      <Skeleton className="border-muted h-full min-h-80 w-full rounded border" />
    </>
  );
}
