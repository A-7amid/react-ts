type HorizontalPosition = "right" | "center" | "left";
type VerticalPosition = "right" | "center" | "left";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPosition} - ${VerticalPosition}`, "center - center">
    | "center";
};

export const Toast = ({ position }: ToastProps) => {
  return <div>Toast Notification Position - {position}</div>;
};
