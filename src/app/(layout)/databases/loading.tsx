import { PageTitle } from "@/components/shared/page-title";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export default function LoadingDatabasesList() {
  return (
    <>
      {/* {children} */}
      <PageTitle title="Banco de dados" />
      <div className="flex h-full w-full flex-col">
        <div className="border-muted mb-3 flex w-full flex-col items-end gap-3 rounded-md border px-3 py-2">
          <Skeleton className="h-9 w-56" />
          <Separator />
          <div className="ml-auto flex h-fit w-full flex-1 items-start justify-end gap-3 md:items-center">
            <div className="flex w-full flex-1 items-center justify-end gap-3 lg:max-w-2/3">
              <div className="flex max-w-none flex-1 gap-3 md:w-fit md:max-w-1/2">
                <Skeleton className="h-9 w-full" />
                <Skeleton className="h-9 w-full" />
              </div>
            </div>
          </div>
        </div>
        <Skeleton className="h-full w-full" />
      </div>
    </>
  );
}
