type ListProps = {
  items: string[];
  onClick: (value: string) => void;
};

export const List = ({ items, onClick }: ListProps) => {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, i) => (
        <div key={i} onClick={() => onClick(item)}>
          {item}
        </div>
      ))}
    </div>
  );
};
