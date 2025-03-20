"use client";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import {
  ConnectDatabaseFormData,
  connectDatabaseFormSchema,
} from "@/validations/database/connect";
import { useForm } from "react-hook-form";
import { DatabaseBasicInfo } from "./form/database-basic-info";
import { DatabaseListOptions } from "./form/database-list-options";

import { yupResolver } from "@hookform/resolvers/yup";
import { DatabaseResumeInfos } from "./form/database-resume-infos";

export const ConnectDatabaseForm = () => {
  const methods = useForm<ConnectDatabaseFormData>({
    defaultValues: {
      step: 1,
      port: 5432,
    },
    mode: "onChange",
    criteriaMode: "firstError",
    resolver: yupResolver(connectDatabaseFormSchema),
  });

  const actualStep = methods.watch("step") ?? 1;

  const steps: Record<number, React.ReactNode> = {
    1: <DatabaseListOptions />,
    2: <DatabaseBasicInfo />,
    3: <DatabaseResumeInfos />,
  };

  const onSubmit = (data: ConnectDatabaseFormData) => {
    if (actualStep < Object.keys(steps).length) {
      methods.setValue("step", actualStep + 1);
    }

    console.log(data);
  };

  const onPrevious = () => {
    methods.setValue("step", Math.max(actualStep - 1, 1));
  };

  const onTestConnection = () => {
    const isValid = methods.trigger();
    if (!isValid) return;
    console.log("Test connection");
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
            <>
              <Button
                type="button"
                variant={"link"}
                className="mr-auto w-max px-0"
                onClick={onTestConnection}
              >
                Testar conexão
              </Button>
              <Button
                type="button"
                variant={"secondary"}
                className="w-max"
                onClick={onPrevious}
              >
                Anterior
              </Button>
            </>
          )}
          <Button type="submit" className="w-max">
            {actualStep === 3 ? "Conectar" : "Continuar"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
