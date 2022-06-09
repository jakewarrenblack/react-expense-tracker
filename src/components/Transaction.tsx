import clsx from "clsx";
import { Transaction as TransactionType } from "../context/GlobalState";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({
  transaction,
}: {
  transaction: TransactionType;
}) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  const { deleteTransaction } = useContext(GlobalContext);

  // using math abs to make it always positive
  return (
    <li
      className={clsx(
        "flex my-2 justify-between pr-4 border-4",
        sign === "-" ? "border-r-red-500" : "border-r-green-500"
      )}
    >
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button onClick={() => deleteTransaction(transaction.id)}>x</button>
    </li>
  );
};

// 39:00

// problem now is trying to figure out how to type deleteTransaction
// complaining in GlobalState
