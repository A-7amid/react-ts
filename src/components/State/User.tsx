import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<null | AuthUser>(null);

  return (
    <div>
      <button
        onClick={() => setUser({ name: "tobi", email: "tobi@gamil.com" })}
      >
        Login
      </button>
      <button onClick={() => setUser(null)}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
