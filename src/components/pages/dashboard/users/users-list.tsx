"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useListView } from "@/contexts/list-view";
import { cn } from "@/lib/utils";
import { createHash } from "crypto";
import { MoreVertical } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { UserActions } from "./user-actions";

interface User {
  id: number;
  name: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const response = await fetch("/api/users");
  if (!response.ok) {
    throw new Error("Failed to fetch users");
  }
  return response.json();
};

const ListItem = ({ user }: { user: User }) => {
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
        href={`/user/${user.id}`}
        className="w-full"
      >
        <div
          className={cn(
            "flex w-full items-center",
            mode === "grid" && "flex-col items-start",
          )}
        >
          <Avatar>
            <AvatarImage src={getImageFromGravatar(user.email)} />
            <AvatarFallback>
              {user.name
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div
            className={cn("ml-2 flex flex-col", mode === "grid" && "mt-2 ml-0")}
          >
            <span className="font-title text-sm font-bold">{user.name}</span>
            <span className="font-sans text-sm">{user.email}</span>
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

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const loadUsers = async () => {
      try {
        const fetchedUsers = await fetchUsers();
        setUsers(fetchedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    loadUsers();
  }, []);

  return (
    <div className="border-muted flex h-full w-full overflow-auto rounded-md border">
      <ul
        className={cn(
          "flex h-full w-full flex-col overflow-y-auto p-3",
          mode === "grid" &&
            "grid auto-rows-max grid-cols-1 grid-rows-none gap-3 md:grid-cols-2 lg:grid-cols-3",
        )}
      >
        {users.map((user) => (
          <ListItem
            key={user.id}
            user={user}
          />
        ))}
      </ul>
    </div>
  );
};
