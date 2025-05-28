import type { Greet } from "../Greet";

export const CustomComponent = ({
  name,
  isLoggedIn,
  messageCount,
}: React.ComponentProps<typeof Greet>) => {
  return <div>{name}</div>;
};
