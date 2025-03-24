import { UserDetails } from "@/components/pages/dashboard/users/user-details";
import { PageTitle } from "@/components/shared/page-title";

export default async function UserDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <div>
      <PageTitle title={`User ${id}`} />
      <div className="flex h-full w-full flex-col overflow-hidden">
        <UserDetails />
      </div>
    </div>
  );
}
