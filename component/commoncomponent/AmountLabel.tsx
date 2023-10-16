import { FC } from "react";

type AmountLabelProps = {
  amount: number;
  currency: string;
  currencyStyle?: any;
};
const AmountLabel: FC<AmountLabelProps> = ({
    amount,
    currency,
    currencyStyle,
}) => {
    return (
        <>
            {amount.toLocaleString().replaceAll(",", " ")}
            <sup style={{ ...currencyStyle }}>{currency}</sup>
        </>
    );
};

export default AmountLabel;
