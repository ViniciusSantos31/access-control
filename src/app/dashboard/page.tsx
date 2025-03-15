import { ConnectDatabaseDialog } from "@/components/pages/dashboard/database/connect-database-dialog";
import {
  ActionCard,
  LinkActionCard,
} from "@/components/pages/dashboard/database/database-card";
import { PageTitle } from "@/components/shared/page-title";
import { DatabaseZap, FolderKey, UserCog, UsersRound } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
      <PageTitle title="Dashboard" />
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
