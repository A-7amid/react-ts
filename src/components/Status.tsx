type StatusProps = {
  status: "loading" | "success" | "error";
};

export const Status = ({ status = "loading" }: StatusProps) => {
  let message;

  if (status === "loading") message = "...Loading";

  if (status === "success") message = "Data fetched seccussfully!";

  if (status === "error") message = "Error fetching data";

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};
