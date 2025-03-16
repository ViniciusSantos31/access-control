import { InputField } from "@/components/ui/input/field";

export const DatabaseBasicInfo = () => {
  return (
    <div className="mt-4 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <InputField name="name" label="Host" required />
        <InputField name="port" label="Port" required />
      </div>
      <InputField
        name="username"
        label="Username"
        placeholder="Nome de usuário"
      />
      <InputField name="password" label="Password" />
    </div>
  );
};
