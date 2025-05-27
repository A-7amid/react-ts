import type React from "react";

type InputProps = {
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Input = ({ value }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Changed", e.target.value);
  };

  return <input type="text" defaultValue={value} onChange={handleChange} />;
};
