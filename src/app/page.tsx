import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-3">
      <h1 className="text-primary font-sans text-2xl">Access CTRL</h1>
      <Link passHref href="/dashboard">
        <Button>Dashboard</Button>
      </Link>
    </div>
  );
}
