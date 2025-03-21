type TableEmptyStateProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
};

export const TableEmptyState = ({
  title,
  description,
  children,
}: TableEmptyStateProps) => {
  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center gap-4">
      <span className="mb-2 flex flex-col px-4 text-center">
        <p className="font-title text-xl">{title}</p>
        {description && (
          <span className="text-muted-foreground">{description}</span>
        )}
      </span>
      {children}
    </div>
  );
};
