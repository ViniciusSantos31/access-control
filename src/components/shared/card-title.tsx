"use client";

type CardTitleProps = {
  title: string;
};

export const CardTitle = ({ title }: CardTitleProps) => {
  return (
    <div className="mb-2 flex justify-start gap-2">
      <h3 className="font-title text-2xl font-bold">{title}</h3>
    </div>
  );
};
