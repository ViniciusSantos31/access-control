import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

type UserDetailSectionProps = {
  title: string;
  count: number;
  data: {
    id: string;
    name: string;
  }[];
};

export const UserDetailSection = ({
  title,
  count,
  data,
}: UserDetailSectionProps) => {
  return (
    <section className="border-muted mt-4 flex w-full flex-col gap-1 rounded-md border p-3">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="font-title text-lg font-semibold">{title}</h4>
        <span className="text-muted-foreground text-xs">{`${count} ${title}`}</span>
      </div>
      <ul className="flex flex-col gap-2">
        {data.map((item) => (
          <li
            className="flex w-full items-center justify-between rounded-md border px-3 py-2"
            key={item.id}
          >
            <span className="text-sm">{item.name}</span>
            <Button
              variant={"ghost"}
              size={"icon"}
              className="text-red-400"
            >
              <Trash />
            </Button>
          </li>
        ))}
      </ul>
    </section>
  );
};
