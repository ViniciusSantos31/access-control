import { Label } from "@/components/ui/label";
import { ComponentProps } from "react";
import { RadioGroupItem, RadioGroup as RadioGroupRoot } from "./primitive";

type RadioGroupProps = ComponentProps<typeof RadioGroupRoot> & {
  options: { label: string; value: string }[];
};

export const RadioGroup = ({ options, ...props }: RadioGroupProps) => {
  return (
    <RadioGroupRoot {...props}>
      {options.map((option) => (
        <div key={option.value} className="flex items-center space-x-2">
          <RadioGroupItem value={option.value} id={option.value} />
          <Label htmlFor={option.value}>{option.label}</Label>
        </div>
      ))}
    </RadioGroupRoot>
  );
};
