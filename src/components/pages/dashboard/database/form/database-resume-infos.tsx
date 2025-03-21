import { ConnectDatabaseFormData } from "@/validations/database/connect";
import { useFormContext } from "react-hook-form";
import { DatabaseType } from "./database-list-options";

const databaseName: Record<DatabaseType, string> = {
  postgresql: "PostgreSQL",
  mysql: "MySQL",
  sqlite: "SQLite",
  cockroachdb: "CockroachDB",
  mariadb: "MariaDB",
  mongodb: "MongoDB",
  sqlserver: "SQL Server",
};

export const DatabaseResumeInfos = () => {
  const { getValues } = useFormContext<ConnectDatabaseFormData>();
  const { database, host, port, type, username } = getValues();

  return (
    <div className="flex flex-col space-y-4">
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-semibold">Detalhes da conexão</h3>
        <div className="flex flex-col space-y-1">
          <div className="flex justify-between">
            <span className="text-primary text-sm">Tipo</span>
            <span className="text-primary text-sm">{databaseName[type]}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary text-sm">Nome de usuário</span>
            <span className="text-primary text-sm">{username}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary text-sm">Host</span>
            <span className="text-primary text-sm">{host}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-primary text-sm">Porta</span>
            <span className="text-primary text-sm">{port}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-lg font-semibold">Detalhes do banco de dados</h3>
        <div className="flex flex-col space-y-1">
          <div className="flex justify-between">
            <span className="text-primary text-sm">Database name</span>
            <span className="text-primary text-sm">{database}</span>
          </div>
          {/* <div className="flex justify-between">
            <span className="text-primary text-sm">Schema</span>
            <span className="text-primary text-sm">public</span>
          </div> */}
        </div>
      </div>
    </div>
  );
};
