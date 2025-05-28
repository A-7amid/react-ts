import { useUser } from "./User.provider";

export const User = () => {
  const { user, setUser } = useUser();

  return (
    <div>
      <button
        onClick={() => setUser({ name: "Tobi", email: "tobi@gamil.com" })}
      >
        Login
      </button>
      <button onClick={() => setUser(null)}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
