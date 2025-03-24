import { Select } from "@/components/ui/select";

export const DatabaseFilters = () => {
  const statusOptions = [
    { label: "Todos", value: "all" },
    { label: "Conectado", value: "connected" },
    { label: "Desconectado", value: "disconnected" },
    { label: "Offline", value: "offline" },
  ];

  const environmentOptions = [
    { label: "Todos", value: "all" },
    { label: "Produção", value: "production" },
    { label: "Homologação", value: "staging" },
    { label: "Desenvolvimento", value: "development" },
  ];

  return (
    <div className="flex w-full flex-1 items-center justify-end gap-3 lg:max-w-2/3">
      <div className="flex max-w-none flex-1 gap-3 md:w-fit md:max-w-1/2">
        <Select
          className="w-full"
          placeholder="Estado"
          options={statusOptions}
        />
        <Select
          className="w-full"
          placeholder="Ambiente"
          options={environmentOptions}
        />
      </div>
    </div>
  );
};
