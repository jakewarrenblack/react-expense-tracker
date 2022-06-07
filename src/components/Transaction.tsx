import { Transaction as TransactionType } from "../context/GlobalState";

export const Transaction = ({
  transaction,
}: {
  transaction: TransactionType;
}) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  // using math abs to make it always positive
  return (
    <li className="flex justify-between">
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      {/* <button>x</button> */}
    </li>
  );
};
