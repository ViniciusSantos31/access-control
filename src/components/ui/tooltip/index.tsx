import React, { ComponentProps } from "react";
import {
  TooltipContent,
  TooltipProvider,
  Tooltip as TooltipRoot,
  TooltipTrigger,
} from "./primitive";

type TooltipProps = ComponentProps<typeof TooltipRoot> & {
  children: React.ReactNode;
  content: string | number | React.ReactNode;
  hiddenTooltip?: boolean;
};

export const Tooltip = ({
  content,
  children,
  hiddenTooltip = false,
  ...props
}: TooltipProps) => {
  return (
    <TooltipProvider>
      <TooltipRoot delayDuration={300} {...props}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent align="center" side="right" hidden={hiddenTooltip}>
          <p>{content}</p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
};
