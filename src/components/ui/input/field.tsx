"use client";

import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from ".";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";

type InputFieldProps = ComponentProps<typeof Input> & {
  name: string;
  label?: string;
  mask?: (value: string) => string;
};

export function InputField({ name, label, ...props }: InputFieldProps) {
  const { control, setValue } = useFormContext();

  const handleChangeValue = (value: string) => {
    if (props.mask) {
      return setValue(name, props.mask(value));
    }

    return setValue(name, value);
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input
              {...props}
              {...field}
              onChange={(e) => handleChangeValue(e.target.value)}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
