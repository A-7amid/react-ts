import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  return (
    <div>
      <button
        onClick={() => setUser({ name: "tobi", email: "tobi@gamil.com" })}
      >
        Login
      </button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
