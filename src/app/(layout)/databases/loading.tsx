import { PageTitle } from "@/components/shared/page-title";

export default function LoadingDatabasesList() {
  return (
    <>
      <PageTitle title="Banco de dados" />
      <div className="flex h-full w-full items-center justify-center">
        <div className="border-primary aspect-square h-32 w-32 animate-spin rounded-full border-t-3" />
      </div>
    </>
  );
}
