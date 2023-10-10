import React from "react";
import { Outlet } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

export type AppProps = {
  className?: string;
};
export const App: React.FC<AppProps> = () => {
  return (
    <NextUIProvider className={"w-screen h-screen overflow-auto"}>
      <Outlet />
    </NextUIProvider>
  );
};
