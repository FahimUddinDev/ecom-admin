import { store } from "@/store/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

export const TestProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};
