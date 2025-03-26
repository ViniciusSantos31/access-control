"use client";

import { ComponentProps } from "react";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialog as AlertDialogRoot,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "./primitive";

export type AlertDialogBaseProps = ComponentProps<typeof AlertDialogRoot> & {
  children: React.ReactNode;
  asChild?: boolean;
};

type AlertDialogProps = AlertDialogBaseProps & {
  title: string;
  description: string;
  cancelText: string;
  actionText: string;
  onAction: () => void;
};

export const AlertDialog = ({
  title,
  description,
  cancelText,
  actionText,
  onAction,
  children,
  asChild = false,
  ...props
}: AlertDialogProps) => {
  return (
    <AlertDialogRoot {...props}>
      <AlertDialogTrigger asChild={asChild}>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{cancelText}</AlertDialogCancel>
          <AlertDialogAction
            onClick={onAction}
            autoFocus
          >
            {actionText}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogRoot>
  );
};
