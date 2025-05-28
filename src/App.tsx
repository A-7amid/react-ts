import { Private } from "./components/auth/Private";
import { Profile } from "./components/auth/Profile";

const App: React.FC = () => {
  return (
    <>
      <Private isLoggedIn={false} component={Profile} />
    </>
  );
};

export default App;
