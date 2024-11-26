import { createContext, useContext } from "react";
import data from "../assets/data";

const menuContext = createContext();

export function MenuProvider({ children }) {
  <menuContext.Provider value={{ menu: data.menu }}>
    {children}
  </menuContext.Provider>;
}
export function useMenu() {
  useContext(menuContext);
}
