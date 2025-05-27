import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";

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
      {/* <Greet name={"Tobi"} messageCount={30} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={personList} /> */}
      <Status status="error" />
      <Heading>Placeholder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Tobi!</Heading>
      </Oscar>
      <Greet name={"Tobi"} isLoggedIn={true} />
    </>
  );
}

export default App;
