"use client";
import { useContext } from "react";
import WindowContext from "./windowContext";

/* We don't return the function directly to keep benefiting from the IDE auto-complete */
const useWindow = () => useContext(WindowContext);

export default useWindow;
