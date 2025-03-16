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
      <span className="flex flex-col space-y-1 text-center">
        <p className="font-title text-xl">{title}</p>
        {description && (
          <desc className="text-muted-foreground">{description}</desc>
        )}
      </span>
      {children}
    </div>
  );
};
