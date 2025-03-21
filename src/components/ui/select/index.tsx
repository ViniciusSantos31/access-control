import { cn } from "@/lib/utils";
import { ComponentProps } from "react";
import {
  SelectContent,
  SelectItem,
  Select as SelectRoot,
  SelectTrigger,
  SelectValue,
} from "./primitive";

type SelectProps = ComponentProps<typeof SelectRoot> & {
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
};

export const Select = ({
  options,
  placeholder,
  className,
  ...props
}: SelectProps) => {
  return (
    <SelectRoot {...props}>
      <SelectTrigger className={cn("w-full", className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="max-w-[var(--radix-select-trigger-width)]">
        {options.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
};
