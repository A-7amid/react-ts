import type { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

export const PersonList = ({ names }: PersonListProps) => {
  return (
    <div>
      {names.map((name, i) => (
        <h2 key={i}>
          {name.first} , {name.last}
        </h2>
      ))}
    </div>
  );
};
