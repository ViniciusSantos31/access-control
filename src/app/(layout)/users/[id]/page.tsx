"use client";

import { UserDetails } from "@/components/pages/dashboard/users/user-details";
import { PageTitle } from "@/components/shared/page-title";

export default function UserDetailsPage() {
  return (
    <div>
      <PageTitle title="Vinícius" />
      <div className="flex h-full w-full flex-col overflow-hidden">
        <UserDetails />
      </div>
    </div>
  );
}
