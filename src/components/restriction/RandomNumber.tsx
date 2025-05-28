type RandomNumberType = {
  value: number;
};

type Positive = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type Negative = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};
type Zero = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps = Positive | Negative | Zero;

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}{" "}
      {isZero && "zero"}
    </div>
  );
};
