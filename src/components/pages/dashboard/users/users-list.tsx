"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useListView } from "@/contexts/list-view";
import { cn } from "@/lib/utils";
import { createHash } from "crypto";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { UserActions } from "./user-actions";

const ListItem = () => {
  const { mode } = useListView();

  const getImageFromGravatar = (email: string) => {
    const hash = createHash("sha256");
    const emailHash = hash.update(email).digest("hex");
    return `https://www.gravatar.com/avatar/${emailHash}`;
  };

  return (
    <li
      className={cn(
        "bg-background hover:bg-accent relative mb-2 flex max-h-40 w-full cursor-pointer items-center rounded-md border px-4 py-3 transition-colors",
        mode === "grid" && "mb-0 items-start py-4 pr-2",
      )}
    >
      <Link
        href="/user/1"
        className="w-full"
      >
        <div
          className={cn(
            "flex w-full items-center",
            mode === "grid" && "flex-col items-start",
          )}
        >
          <Avatar>
            <AvatarImage src={getImageFromGravatar("vncssnts31@gmail.com")} />
            <AvatarFallback>V</AvatarFallback>
          </Avatar>
          <div
            className={cn("ml-2 flex flex-col", mode === "grid" && "mt-2 ml-0")}
          >
            <span className="font-title text-sm font-bold">
              Vinícius Santos
            </span>
            <span className="font-sans text-sm">vncssnts31@gmail.com</span>
          </div>
        </div>
      </Link>
      <UserActions>
        <Button
          className={cn("")}
          variant={"ghost"}
        >
          <MoreVertical />
        </Button>
      </UserActions>
    </li>
  );
};

export const UsersList = () => {
  const { mode } = useListView();

  return (
    <div className="border-muted flex h-full w-full overflow-auto rounded-md border">
      <ul
        className={cn(
          "flex h-full w-full flex-col overflow-y-auto p-3",
          mode === "grid" &&
            "grid auto-rows-max grid-cols-1 grid-rows-none gap-3 md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </ul>
    </div>
  );
};
