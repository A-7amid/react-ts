type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = ({ name }: PersonProps) => {
  return (
    <div>
      {name.first} {name.last}
    </div>
  );
};
