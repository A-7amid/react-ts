import { useContext } from "react";
import { ThemeContext } from "./Theme.provider";

export const Box = () => {
  //   const { theme } = useTheme();
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.secondary.main,
        color: theme.secondary.text,
      }}
    >
      Theme context.
    </div>
  );
};
