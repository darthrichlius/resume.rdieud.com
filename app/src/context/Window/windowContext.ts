"use client";
import { createContext } from "react";

interface IWindowContext {
  isResizing: boolean;
  /**
   * Indicates if the screen is in landscape mode
   * Only relevant for screens before a certain breakpoint
   */
  isLandScape: boolean;
  winWidth: number;
  winHeight: number;
}

const WindowContext = createContext<IWindowContext>({} as IWindowContext);

export default WindowContext;
