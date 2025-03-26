import { UserDetails } from "@/components/pages/dashboard/users/user-details";
import { PageTitle } from "@/components/shared/page-title";

export const dynamic = "force-dynamic";

export default async function UserDetailsPage() {
  return (
    <>
      <PageTitle
        title="Detalhes"
        withGoBack
      />
      <div className="flex h-full w-full flex-col overflow-hidden">
        <UserDetails />
      </div>
    </>
  );
}
