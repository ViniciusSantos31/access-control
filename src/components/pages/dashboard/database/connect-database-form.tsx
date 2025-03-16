"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { DatabaseBasicInfo } from "./form/database-basic-info";
import {
  DatabaseListOptions,
  DatabaseType,
} from "./form/database-list-options";
import { DatabaseResumeInfos } from "./form/database-resume-infos";

export type CreateConnectionFormData = {
  type: DatabaseType;
  username: string;
  password: string;
  host: string;
  port: number;
};

const fieldToValidate: Record<number, Array<keyof CreateConnectionFormData>> = {
  1: ["type"],
  2: ["username", "password", "host", "port"],
};

export const ConnectDatabaseForm = () => {
  const [actualStep, setActualStep] = useState(1);

  const methods = useForm<CreateConnectionFormData>({
    defaultValues: {
      type: undefined,
      username: "",
      password: "",
      host: "",
      port: 5432,
    },
  });

  // const STEPS = 3;

  const steps: Record<number, React.ReactNode> = {
    1: <DatabaseListOptions />,
    2: <DatabaseBasicInfo />,
    3: <DatabaseResumeInfos />,
  };

  const onSubmit = (data: CreateConnectionFormData) => {
    const stepsCount = Object.keys(steps).length;

    if (actualStep < stepsCount) {
      methods.clearErrors();
      methods.trigger(fieldToValidate[actualStep]);
      setActualStep((prev) => prev + 1);
      return;
    }

    console.log(data);
  };

  return (
    <Form {...methods}>
      <form
        className="flex w-full flex-col"
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        {steps[actualStep]}
        <div className="mt-6 flex w-full items-center justify-end gap-2">
          {actualStep > 1 && (
            <Button
              type="button"
              variant={"secondary"}
              onClick={() =>
                setActualStep((prev) => {
                  return Math.min(prev - 1, 1);
                })
              }
              className="w-max"
            >
              Anterior
            </Button>
          )}
          <Button type="submit" className="w-max">
            Continuar
          </Button>
        </div>
      </form>
    </Form>
  );
};
