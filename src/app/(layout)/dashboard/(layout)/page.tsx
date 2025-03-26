import { ConnectDatabaseDialog } from "@/components/pages/dashboard/database/connect-database-dialog";
import {
  ActionCard,
  LinkActionCard,
} from "@/components/pages/dashboard/database/database-card";
import { PageTitle } from "@/components/shared/page-title";
import { DatabaseZap, FolderKey, UserCog, UsersRound } from "lucide-react";

export default async function DashboardPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return (
    <>
      <PageTitle title="Dashboard" />
      <section className="grid flex-1 auto-rows-max grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:flex">
        <ConnectDatabaseDialog>
          <ActionCard
            title="Conectar novo banco de dados"
            description="Conecte um novo banco de dados para começar a usar o Access."
            icon={DatabaseZap}
          />
        </ConnectDatabaseDialog>
        <LinkActionCard
          href="/permissions"
          title="Permissões"
          icon={FolderKey}
          description="Gerencie as permissões dos usuários do seu banco de dados."
        />
        <LinkActionCard
          href="/users"
          title="Usuários"
          icon={UserCog}
          description="Gerencie os usuários do seu banco de dados."
        />
        <LinkActionCard
          href="/groups"
          title="Grupos"
          icon={UsersRound}
          description="Gerencie os grupos do seu banco de dados."
        />
      </section>
    </>
  );
}
