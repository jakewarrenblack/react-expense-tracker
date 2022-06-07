import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  // Can now get access to our global state
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3 className="font-semibold">History</h3>
      <ul className="list border-y-2 border-gray-400 py-2">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
