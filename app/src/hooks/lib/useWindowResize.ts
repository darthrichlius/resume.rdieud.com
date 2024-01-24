"use client";
import { useEffect, useState } from "react";

const useWindowResize = (debouncedDelay: number = 200) => {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  const [isResizing, setIsResizing] = useState(false);

  const handleResize = () => {
    setIsResizing(true);
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  let resizeTimer: any;
  const handleResizeDebounced = () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setIsResizing(false);
    }, debouncedDelay);
  };

  useEffect(() => {
    if (typeof window === "undefined") {
      return; // Skip if running in a non-browser environment
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", handleResizeDebounced);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", handleResizeDebounced);
      setIsResizing(false);
      clearTimeout(resizeTimer);
    };
  }, [debouncedDelay]);

  return { isResizing, windowSize };
};

export default useWindowResize;
