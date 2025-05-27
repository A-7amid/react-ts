import { Button } from "./components/Button";
import { Input } from "./components/Input";

function App() {
  return (
    <>
      <Button handleClick={(e, id) => console.log("Clicked", e, id)} />

      <Input
        value={"hi"}
        handleChange={(e) => console.log("Changed", e.target.value)}
      />
    </>
  );
}

export default App;
