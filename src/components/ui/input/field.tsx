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
};

export function InputField({ name, label, ...props }: InputFieldProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      rules={{ required: props.required && "Campo obrigatório" }}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input {...props} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
