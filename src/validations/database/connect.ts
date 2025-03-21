import { DatabaseType } from "@/components/pages/dashboard/database/form/database-list-options";
import * as yup from "yup";

export const connectDatabaseFormSchema = yup.object().shape({
  type: yup
    .mixed<DatabaseType>()
    .oneOf(
      ["mysql", "postgresql", "mongodb", "sqlite", "mariadb", "cockroachdb"],
      "Campo obrigatório.",
    )
    .required("Campo obrigatório."),
  host: yup
    .string()
    .min(3, "O campo host deve ter no mínimo 3 caracteres.")
    .when("step", {
      is: 2,
      then: (schema) => schema.required("Campo obrigatório."),
    }),
  port: yup
    .number()
    .min(1, "O valor mínimo é 1.")
    .max(65535, "O valor máximo é 65535.")
    .default(5432)
    .when("step", {
      is: 2,
      then: (schema) => schema.required("Campo obrigatório."),
    }),
  database: yup.string().when("step", {
    is: 2,
    then: (schema) => schema.required("Campo obrigatório."),
  }),
  username: yup.string().when("step", {
    is: 2,
    then: (schema) => schema.required("Campo obrigatório."),
  }),
  password: yup.string().when("step", {
    is: 2,
    then: (schema) => schema.required("Campo obrigatório."),
  }),
  step: yup.number().nullable().default(1),
});

export type ConnectDatabaseFormData = yup.InferType<
  typeof connectDatabaseFormSchema
>;
