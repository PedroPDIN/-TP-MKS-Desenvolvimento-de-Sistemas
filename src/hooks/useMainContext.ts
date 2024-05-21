import { useContext } from "react";
import { IDataContext } from "@/store/Context/Main.context";
import MainContext from "@/store/Context/Main.context";

export const useMainContext = (): IDataContext => {
  const context = useContext(MainContext);
  if (!context) {
    throw new Error("error context.");
  }
  return context;
};