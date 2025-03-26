import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Pen, Trash } from "lucide-react";

type UserDetailsProps = {
  className?: string;
};

export const UserDetails = ({ className }: UserDetailsProps) => {
  return (
    <main className={cn("flex max-h-full flex-col overflow-y-auto", className)}>
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
      <div className="flex w-full flex-col md:flex-row md:gap-4">
        <section className="border-muted mt-4 flex w-full flex-col gap-1 rounded-md border p-3">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-title text-lg font-semibold">Permissões</h4>
            <span className="text-muted-foreground text-xs">3 permissões</span>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex w-full items-center justify-between rounded-md border px-3 py-2">
              <span className="text-sm">Desenvolvedor</span>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="text-red-400"
              >
                <Trash />
              </Button>
            </li>
            <li className="flex w-full items-center justify-between rounded-md border px-3 py-2">
              <span className="text-sm">Desenvolvedor</span>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="text-red-400"
              >
                <Trash />
              </Button>
            </li>
          </ul>
        </section>
        <section className="border-muted mt-4 flex w-full flex-col gap-1 rounded-md border p-3">
          <div className="mb-3 flex items-center justify-between">
            <h4 className="font-title text-lg font-semibold">Grupos</h4>
            <span className="text-muted-foreground text-xs">2 grupos</span>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex w-full items-center justify-between rounded-md border px-3 py-2">
              <span className="text-sm">Desenvolvedor</span>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="text-red-400"
              >
                <Trash />
              </Button>
            </li>
            <li className="flex w-full items-center justify-between rounded-md border px-3 py-2">
              <span className="text-sm">Desenvolvedor</span>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="text-red-400"
              >
                <Trash />
              </Button>
            </li>
            <li className="flex w-full items-center justify-between rounded-md border px-3 py-2">
              <span className="text-sm">Desenvolvedor</span>
              <Button
                variant={"ghost"}
                size={"icon"}
                className="text-red-400"
              >
                <Trash />
              </Button>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};
