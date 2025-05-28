import { Login } from "./Login";
import type { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  return <div>{isLoggedIn ? <Component name="Tobi" /> : <Login />}</div>;
};
