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
  side?: "top" | "right" | "bottom" | "left";
};

export const Tooltip = ({
  content,
  children,
  hiddenTooltip = false,
  side = "right",
  ...props
}: TooltipProps) => {
  return (
    <TooltipProvider>
      <TooltipRoot
        delayDuration={300}
        {...props}
      >
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          align="center"
          side={side}
          hidden={hiddenTooltip}
        >
          <p>{content}</p>
        </TooltipContent>
      </TooltipRoot>
    </TooltipProvider>
  );
};
