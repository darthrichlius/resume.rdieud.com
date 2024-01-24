"use client";
import React, { PropsWithChildren } from "react";
import WindowContext from "./windowContext";
import { useWindowResize } from "@@src/hooks";

interface Props extends PropsWithChildren {
  breakpoint: number;
}

const WindowProvider = ({ breakpoint, children }: Props) => {
  const {
    isResizing,
    windowSize: { width: winWidth, height: winHeight },
  } = useWindowResize();

  const isLandScape = winWidth < breakpoint && winWidth > winHeight;

  return (
    <WindowContext.Provider
      value={{ isResizing, isLandScape, winWidth, winHeight }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export default WindowProvider;
