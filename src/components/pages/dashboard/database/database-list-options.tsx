import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio/primitive";
import { Fragment } from "react";
import {
  CreateConnectionFormData,
  DatabaseTypeOption,
} from "./connect-database-form";

import { FormField } from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import {
  SiCockroachlabs,
  SiMariadb,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
} from "react-icons/si";

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
  const { control } = useFormContext<CreateConnectionFormData>();

  return (
    <section className="mt-6">
      <Label className="mb-4">Selecione um banco de dados</Label>
      <FormField
        control={control}
        name="database.type"
        render={({ field }) => (
          <RadioGroup {...field} onValueChange={field.onChange}>
            <div className="grid w-full auto-rows-auto grid-cols-3 gap-3">
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
                      className="border-muted bg-background hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex aspect-square cursor-pointer flex-col items-center justify-center rounded-md border-2"
                    >
                      {option.icon}
                      <p className="mt-2">{option.label}</p>
                    </Label>
                  </div>
                </Fragment>
              ))}
            </div>
          </RadioGroup>
        )}
      />
    </section>
  );
};
