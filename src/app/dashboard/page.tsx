"use client";

import { ConnectDatabaseDialog } from "@/components/pages/dashboard/database/connect-database-dialog";
import {
  ActionCard,
  LinkActionCard,
} from "@/components/pages/dashboard/database/database-card";
import { Button } from "@/components/ui/button";
import { useSidebar } from "@/components/ui/sidebar";
import {
  DatabaseZap,
  FolderKey,
  PanelLeft,
  UserCog,
  UsersRound,
} from "lucide-react";

export default function DashboardPage() {
  const { toggleSidebar } = useSidebar();

  return (
    <>
      <div className="mb-6 flex items-center justify-start gap-2">
        <Button
          variant={"ghost"}
          className="!aspect-square"
          onClick={toggleSidebar}
        >
          <PanelLeft size={32} className="!size-5" />
        </Button>
        <h1 className="font-title text-4xl font-bold">Dashboard</h1>
      </div>
      <section className="flex w-full flex-wrap gap-3">
        <ConnectDatabaseDialog>
          <ActionCard
            title="Conectar novo banco de dados"
            description="Conecte um novo banco de dados para começar a usar o Access."
            icon={DatabaseZap}
          />
        </ConnectDatabaseDialog>
        <LinkActionCard
          href="/dashboard/permissions"
          title="Permissões"
          icon={FolderKey}
          description="Gerencie as permissões dos usuários do seu banco de dados."
        />
        <LinkActionCard
          href="/dashboard/users"
          title="Usuários"
          icon={UserCog}
          description="Gerencie os usuários do seu banco de dados."
        />
        <LinkActionCard
          href="/dashboard/groups"
          title="Grupos"
          icon={UsersRound}
          description="Gerencie os grupos do seu banco de dados."
        />
      </section>
    </>
  );
}
