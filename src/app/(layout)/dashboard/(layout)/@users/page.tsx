import { CardPreviewData } from "@/components/shared/card-preview-data";
import { columns, User } from "./columns";
import { UserDataTable } from "./data-table";

async function getData(): Promise<User[]> {
  return [
    {
      id: "cahaseddr3",
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Admin",
    },
    {
      id: "asvhe4h3",
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "User",
    },
    {
      id: "ancps74qsdg",
      name: "Alice Johnson",
      email: "alice.johnson@example.com",
      role: "Moderator",
    },
  ];
}

export default async function UsersPage() {
  const data = await new Promise((resolve) => setTimeout(resolve, 1000)).then(
    () => getData(),
  );

  return (
    <CardPreviewData title="Usuários" href={"/dashboard/users"}>
      <UserDataTable columns={columns} data={data} />
    </CardPreviewData>
  );
}
