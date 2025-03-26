"use client";

import React, { createContext, ReactNode, useContext, useState } from "react";

export type ListViewMode = "grid" | "list";

interface ListViewContextProps {
  mode: ListViewMode;
  setMode: (mode: ListViewMode) => void;
}

const ListViewContext = createContext<ListViewContextProps | undefined>(
  undefined,
);

export const ListViewProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [mode, setMode] = useState<ListViewMode>("list");

  return (
    <ListViewContext.Provider value={{ mode, setMode }}>
      {children}
    </ListViewContext.Provider>
  );
};

export const useListView = (): ListViewContextProps => {
  const context = useContext(ListViewContext);
  if (!context) {
    throw new Error("useListView must be used within a ListViewProvider");
  }
  return context;
};
