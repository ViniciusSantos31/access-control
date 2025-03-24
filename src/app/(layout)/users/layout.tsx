"use client";

import { ListViewProvider } from "@/contexts/list-view";

export default function UsersLayout({
  children,
  user,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
}) {
  return (
    <>
      <ListViewProvider>
        {children}
        {user}
      </ListViewProvider>
    </>
  );
}
