import { User } from "./components/context/User";
import { UserProvider } from "./components/context/User.provider";

const App: React.FC = () => {
  return (
    <>
      <UserProvider>
        <User />
      </UserProvider>
    </>
  );
};

export default App;
