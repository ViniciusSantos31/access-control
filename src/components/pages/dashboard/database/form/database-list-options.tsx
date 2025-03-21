"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio/primitive";
import { Fragment } from "react";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ConnectDatabaseFormData } from "@/validations/database/connect";
import { useFormContext } from "react-hook-form";
import {
  SiCockroachlabs,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
} from "react-icons/si";

export type DatabaseType =
  | "mysql"
  | "postgresql"
  | "mongodb"
  | "sqlite"
  | "sqlserver"
  | "mariadb"
  | "cockroachdb";

type DatabaseTypeOption = {
  label: string;
  value: DatabaseType;
  icon: React.ReactNode;
};

const databaseOptions: DatabaseTypeOption[] = [
  { label: "MySQL", icon: <SiMysql size={32} />, value: "mysql" },
  {
    label: "PostgreSQL",
    icon: <SiPostgresql size={32} />,
    value: "postgresql",
  },
  { label: "MongoDB", icon: <SiMongodb size={32} />, value: "mongodb" },
  { label: "SQLite", icon: <SiSqlite size={32} />, value: "sqlite" },
  { label: "MariaDB", icon: <SiMariadb size={32} />, value: "mariadb" },
  {
    label: "CockroachDB",
    icon: <SiCockroachlabs size={32} />,
    value: "cockroachdb",
  },
];

export const DatabaseListOptions = () => {
  const { control } = useFormContext<ConnectDatabaseFormData>();

  return (
    <FormField
      control={control}
      name="type"
      render={({ field }) => (
        <FormItem className="mt-4">
          <FormLabel>Selecione um banco de dados</FormLabel>
          <FormControl>
            <RadioGroup {...field} onValueChange={field.onChange}>
              <div className="grid w-full auto-rows-auto grid-cols-2 gap-3 md:max-w-none md:grid-cols-3">
                {databaseOptions.map((option) => (
                  <Fragment key={option.value}>
                    <div>
                      <RadioGroupItem
                        value={option.value}
                        id={option.value}
                        className="peer sr-only"
                      />
                      <Label
                        htmlFor={option.value}
                        className="border-muted bg-background hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex aspect-square h-full max-h-40 flex-1 cursor-pointer flex-col items-center justify-center rounded-md border-2 py-6 md:max-w-none"
                      >
                        {option.icon}
                        <p className="mt-2">{option.label}</p>
                      </Label>
                    </div>
                  </Fragment>
                ))}
              </div>
            </RadioGroup>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
