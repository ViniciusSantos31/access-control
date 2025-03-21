"use client";

import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { Input } from ".";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../form";

type InputFieldProps = ComponentProps<typeof Input> & {
  name: string;
  label?: string;
  hint?: string;
};

export function InputField({ name, label, hint, ...props }: InputFieldProps) {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Input {...props} {...field} />
          </FormControl>
          {hint && <FormDescription>{hint}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
