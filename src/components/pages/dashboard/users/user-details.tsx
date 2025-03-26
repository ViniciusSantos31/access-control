import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Pen } from "lucide-react";
import { UserDangerArea } from "./user-danger-area";
import { UserDetailSection } from "./user-detail-section";

type UserDetailsProps = {
  className?: string;
};

export const UserDetails = ({ className }: UserDetailsProps) => {
  return (
    <main
      className={cn(
        "flex h-full max-h-full flex-col overflow-y-auto",
        className,
      )}
    >
      <div className="flex w-full items-center gap-2 rounded-md border p-3">
        <Avatar>
          <AvatarImage />
          <AvatarFallback>V</AvatarFallback>
        </Avatar>
        <h3>Vinícius Santos</h3>
      </div>
      <section className="border-muted mt-4 flex flex-col gap-1 rounded-md border p-3">
        <div className="mb-3 flex items-center justify-between">
          <h4 className="font-title text-lg font-semibold">Dados de acesso</h4>
          <Button
            variant={"ghost"}
            size={"icon"}
          >
            <Pen />
          </Button>
        </div>
        <span className="inline-flex gap-2">
          <p className="text-sm">Email:</p>
          <p className="text-sm font-medium">vncssnts31@gmail.com</p>
        </span>
        <span className="inline-flex gap-2">
          <p className="text-sm">Senha:</p>
          <p className="text-sm font-medium">********</p>
        </span>
      </section>
      <div className="mb-4 flex w-full flex-1 flex-col md:flex-row md:gap-4">
        <UserDetailSection
          count={3}
          data={[
            {
              id: "1",
              name: "Desenvolvedor",
            },
          ]}
          title="Permissões"
        />
        <UserDetailSection
          count={2}
          data={[
            {
              id: "1",
              name: "Front-end",
            },
          ]}
          title="Grupos"
        />
      </div>
      <UserDangerArea />
    </main>
  );
};
