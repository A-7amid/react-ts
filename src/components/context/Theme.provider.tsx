import React, { createContext, useContext } from "react";
import { theme } from "./theme";

export const ThemeContext = createContext(theme);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("mustf l;sda f;ljkda");
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
