import {
  PopoverContent,
  Popover as PopoverRoot,
  PopoverTrigger,
} from "./primitive";

type PopoverProps = React.ComponentProps<typeof PopoverRoot> & {
  content: React.ReactNode;
};

export const Popover = ({ children, content, ...props }: PopoverProps) => {
  return (
    <PopoverRoot {...props}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent>{content}</PopoverContent>
    </PopoverRoot>
  );
};
