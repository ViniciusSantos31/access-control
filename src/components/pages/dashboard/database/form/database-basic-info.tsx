"use client";

import { InputField } from "@/components/ui/input/field";

export const DatabaseBasicInfo = () => {
  return (
    <div className="mt-4 space-y-4">
      <InputField name="database" label="Nome do banco de dados" />
      <div className="grid grid-cols-2 items-start gap-4">
        <InputField name="host" label="Host" />
        <InputField name="port" label="Porta" type="number" />
      </div>
      <InputField
        name="username"
        label="Nome de usuário"
        placeholder="Nome de usuário"
      />
      <InputField name="password" label="Senha" type="password" />
    </div>
  );
};
