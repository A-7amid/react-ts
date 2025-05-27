type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
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
