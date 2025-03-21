import { ConnectDatabaseDialog } from "@/components/pages/dashboard/database/connect-database-dialog";
import { PageTitle } from "@/components/shared/page-title";
import { Button } from "@/components/ui/button";
import { databasesColumns } from "../dashboard/(layout)/@databases/columns";
import { DatabasesDataTable } from "../dashboard/(layout)/@databases/data-table";

export default async function DatabasesListPage() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <>
      <PageTitle title="Banco de dados" />
      <div className="flex h-full w-full flex-col">
        <div className="mb-3 flex w-full items-center gap-3">
          <div className="border-muted flex w-full flex-1 rounded-md border px-3 py-2">
            Filtros
          </div>
          <ConnectDatabaseDialog>
            <Button>Novo banco de dados</Button>
          </ConnectDatabaseDialog>
        </div>
        <DatabasesDataTable columns={databasesColumns} data={[]} />
      </div>
    </>
  );
}
