import { PageTitle } from "@/components/shared/page-title";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function UserDetailLoading() {
  return (
    <>
      <PageTitle
        title="Detalhes"
        withGoBack
      />
      <main className={cn("flex h-full max-h-full flex-col overflow-y-auto")}>
        <div className="flex h-14 w-full items-center gap-2 rounded-md border p-3">
          <Avatar>
            <AvatarFallback />
          </Avatar>
          <Skeleton className="h-6 w-full max-w-40" />
        </div>
        <section className="border-muted mt-4 flex flex-col gap-1 rounded-md border p-3">
          <div className="mb-3 flex h-full max-h-32 items-center justify-between">
            <Skeleton className="font-title h-9 w-full max-w-72 text-lg font-semibold" />
          </div>
          <span className="inline-flex gap-2">
            <Skeleton className="h-5 w-full max-w-64 text-sm font-medium" />
          </span>
          <span className="inline-flex gap-2">
            <Skeleton className="h-5 w-full max-w-64 text-sm font-medium" />
          </span>
        </section>
        <div className="my-4 flex w-full flex-1 flex-col md:flex-row md:gap-4">
          <Skeleton className="h-full w-full" />
          <Skeleton className="h-full w-full" />
        </div>
        <Skeleton className="w-full flex-1" />
      </main>
    </>
  );
}
