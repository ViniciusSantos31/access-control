import { PageTitle } from "@/components/shared/page-title";
import { databasesColumns } from "../dashboard/(layout)/@databases/columns";
import { DatabasesDataTable } from "../dashboard/(layout)/@databases/data-table";

export default async function DatabasesListPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <>
      <PageTitle title="Banco de dados" />
      <div className="flex h-full w-full">
        <DatabasesDataTable columns={databasesColumns} data={[]} />
      </div>
    </>
  );
}
