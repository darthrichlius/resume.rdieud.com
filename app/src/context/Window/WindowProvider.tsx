"use client";
import React, { PropsWithChildren } from "react";
import WindowContext from "./windowContext";
import { useWindowResize } from "@@src/hooks";

interface Props extends PropsWithChildren {
  breakpoints: {
    isLandScape: number;
    isLgVertical: number;
  };
}

const WindowProvider = ({ breakpoints, children }: Props) => {
  const {
    isResizing,
    windowSize: { width: winWidth, height: winHeight },
  } = useWindowResize();

  const isLandScape =
    winWidth < breakpoints.isLandScape && winWidth > winHeight;
  /**
   * The 4:3 ratio is more empirical than anything else.
   * It serves as a margin of safety because targeting other popular ratios on the market (16:9, 21:9) is risky,
   * as we'll be primarily focusing on wide screens.
   */
  const isLgVertical =
    winWidth >= breakpoints.isLgVertical && winHeight >= winWidth * (4 / 3);

  return (
    <WindowContext.Provider
      value={{ isResizing, isLandScape, isLgVertical, winWidth, winHeight }}
    >
      {children}
    </WindowContext.Provider>
  );
};

export default WindowProvider;
