import { cardVariants } from "@/components/pages/dashboard/database/database-card";
import { PageTitle } from "@/components/shared/page-title";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <>
      {/* <Skeleton className="mb-6 h-11 w-80" /> */}
      <PageTitle title="Dashboard" />
      <section className="flex w-full flex-wrap gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton key={index} className={cardVariants()} />
        ))}
      </section>
    </>
  );
}
