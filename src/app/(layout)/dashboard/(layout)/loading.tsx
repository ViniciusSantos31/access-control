import {
  cardColorStyles,
  cardVariants,
} from "@/components/pages/dashboard/database/database-card";
import { PageTitle } from "@/components/shared/page-title";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export default function DashboardLoading() {
  return (
    <>
      <PageTitle title="Dashboard" />
      <section className="grid flex-1 auto-rows-max grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:flex">
        {Array.from({ length: 4 }).map((_, index) => (
          <Skeleton
            key={index}
            className={cardVariants({
              className: cn(cardColorStyles, "min-h-16"),
            })}
          />
        ))}
      </section>
    </>
  );
}
