import { ConnectDatabaseDialog } from "@/components/pages/dashboard/database/connect-database-dialog";
import { DatabaseFilters } from "@/components/pages/dashboard/database/filters";
import { PageTitle } from "@/components/shared/page-title";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plug } from "lucide-react";
import { databasesColumns } from "../dashboard/(layout)/@databases/columns";
import { DatabasesDataTable } from "../dashboard/(layout)/@databases/data-table";

export default async function DatabasesListPage() {
  // await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <>
      <PageTitle title="Banco de dados" />
      <div className="flex h-full w-full flex-col">
        <div className="border-muted mb-3 flex w-full flex-col items-end gap-3 rounded-md border px-3 py-2">
          <ConnectDatabaseDialog>
            <Button>
              <Plug />
              Conectar um banco de dados
            </Button>
          </ConnectDatabaseDialog>
          <Separator />
          <div className="ml-auto flex h-fit w-full flex-1 items-start justify-end gap-3 md:items-center">
            <DatabaseFilters />
          </div>
        </div>
        <DatabasesDataTable
          columns={databasesColumns}
          data={[]}
        />
      </div>
    </>
  );
}
