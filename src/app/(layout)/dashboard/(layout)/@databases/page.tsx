import { CardPreviewData } from "@/components/shared/card-preview-data";
import { Database, databasesColumns } from "./columns";
import { DatabasesDataTable } from "./data-table";

async function getData(): Promise<Database[]> {
  return [
    {
      id: "728ed52f",
      status: "connected",
      name: "PostgreSQL",
    },
    {
      id: "728ed52f",
      status: "disconnected",
      name: "MongoDB",
    },
    {
      id: "728ed52f",
      status: "offline",
      name: "MySQL",
    },
  ];
}

export default async function DatabasesPage() {
  const data = await new Promise((resolve) => setTimeout(resolve, 2000)).then(
    () => getData(),
  );

  return (
    <CardPreviewData
      title="Bancos de dados"
      href={"/databases"}
    >
      <DatabasesDataTable
        columns={databasesColumns}
        data={data}
      />
    </CardPreviewData>
  );
}
