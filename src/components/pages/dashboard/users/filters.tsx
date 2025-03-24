"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio/primitive";
import { Select } from "@/components/ui/select";
import { Tooltip } from "@/components/ui/tooltip";
import { ListViewMode, useListView } from "@/contexts/list-view";
import { LayoutGrid, StretchHorizontal } from "lucide-react";

export const UsersFilters = () => {
  const { mode, setMode } = useListView();

  const statusOptions = [
    { label: "Todos", value: "all" },
    { label: "Ativo", value: "active" },
    { label: "Desativado", value: "disconnected" },
  ];

  const permissionOptions = [
    { label: "Todos", value: "all" },
    { label: "Administrador", value: "admin" },
    { label: "Desenvolvedor", value: "dev" },
  ];

  const viewModeOptions = [
    { icon: StretchHorizontal, value: "list", label: "Lista" },
    { icon: LayoutGrid, value: "grid", label: "Grid" },
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
          placeholder="Permissão"
          options={permissionOptions}
        />
      </div>
      <div className="flex items-start">
        <RadioGroup
          value={mode}
          onValueChange={(mode) => setMode(mode as ListViewMode)}
          orientation="horizontal"
          className="gap-1"
        >
          {viewModeOptions.map((option) => (
            <Tooltip
              content={option.label}
              key={option.value}
              side="top"
            >
              <div key={option.value}>
                <RadioGroupItem
                  id={option.value}
                  className="peer sr-only"
                  value={option.value}
                />
                <Label
                  htmlFor={option.value}
                  className="border-muted bg-background hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary flex aspect-square h-full max-h-40 flex-1 cursor-pointer flex-col items-center justify-center rounded-md border-2 p-2 md:max-w-none"
                >
                  <option.icon size={16} />
                </Label>
              </div>
            </Tooltip>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
};
