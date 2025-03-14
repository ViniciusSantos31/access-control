import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const UserDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant={"ghost"}
          className="flex w-full flex-1 justify-start gap-2 px-2"
        >
          <Avatar>
            <AvatarImage
              src={"https://www.github.com/viniciussantos31.png"}
              alt={"user-profile-picture"}
            />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <p>Vini Santos</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="center"
        className="w-[var(--radix-dropdown-menu-trigger-width)]"
      >
        <DropdownMenuItem>oi</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
