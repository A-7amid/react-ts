import { useState } from "react";

export const LoggedIn = () => {
  const [isLoggedin, setIsLoggedin] = useState(false);

  return (
    <div>
      <button onClick={() => setIsLoggedin(true)}>Login</button>
      <button onClick={() => setIsLoggedin(false)}>Logout</button>
      <div>user is {isLoggedin ? "logged in" : "logged out"}</div>
    </div>
  );
};
