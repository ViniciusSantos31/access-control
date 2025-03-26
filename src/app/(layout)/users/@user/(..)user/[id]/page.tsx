"use client";

import { UserDetails } from "@/components/pages/dashboard/users/user-details";
import { Dialog } from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PreviewUserModal() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleClose = (open: boolean) => {
    if (!open) {
      router.back();
    }
    setOpen(open);
  };

  return (
    <Dialog
      open={open}
      setOpen={handleClose}
      title="Visualizar usuário"
      description="Visualize os detalhes do usuário"
      content={<UserDetails />}
      className="flex h-full max-h-[calc(100dvh-8rem)] w-full flex-col md:w-[calc(100%-8rem)] md:max-w-none md:px-4"
    />
  );
}
