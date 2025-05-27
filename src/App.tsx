import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Tobi",
    last: "Ali",
  };

  const personList = [
    {
      first: "John",
      last: "Doe",
    },
    {
      first: "Jane",
      last: "Smith",
    },
    {
      first: "Alice",
      last: "Johnson",
    },
  ];

  return (
    <>
      <Greet name={"Tobi"} messageCount={30} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={personList} />
    </>
  );
}

export default App;
