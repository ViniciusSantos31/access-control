import Link from "next/link";
import { Button } from "../ui/button";
import { CardTitle } from "./card-title";

type CardPreviewDataProps = {
  title: string;
  href?: string;
  children: React.ReactNode;
};

export const CardPreviewData = ({
  title,
  children,
  href,
}: CardPreviewDataProps) => {
  return (
    <div className="border-muted flex h-full w-full flex-col rounded-md border p-6">
      <div className="flex w-full justify-between">
        <CardTitle title={title} />
        {href && (
          <Link passHref href={href}>
            <Button variant={"link"}>Ver todos</Button>
          </Link>
        )}
      </div>
      <section className="mt-3">{children}</section>
    </div>
  );
};
