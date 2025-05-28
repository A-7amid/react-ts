import { RandomNumber } from "./components/restriction/RandomNumber";

const App: React.FC = () => {
  return (
    <>
      <RandomNumber value={10} isPositive />
    </>
  );
};

export default App;
