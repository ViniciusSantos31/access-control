"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { DatabaseListOptions } from "./database-list-options";

export type CreateConnectionFormData = {
  database: {
    type: DatabaseType;
  };
  username: string;
  password: string;
  host: string;
  port: number;
};

type DatabaseType =
  | "mysql"
  | "postgresql"
  | "mongodb"
  | "sqlite"
  | "sqlserver"
  | "mariadb"
  | "cockroachdb";

export type DatabaseTypeOption = {
  label: string;
  value: DatabaseType;
  icon: React.ReactNode;
};

export const ConnectDatabaseForm = () => {
  const methods = useForm<CreateConnectionFormData>();

  const onSubmit = (data: CreateConnectionFormData) => {
    console.log(data);
  };

  return (
    <Form {...methods}>
      <form
        className="flex w-full flex-col"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <DatabaseListOptions />
        <Button type="submit" className="mt-6 ml-auto w-max">
          Conectar
        </Button>
      </form>
    </Form>
  );
};
