import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";

export const IncomeExpenses = () => {
  // to me this seems like using something like redux?
  // we can keep whatever we want in the state and access it wherever it's needed
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  // these methods are confusing to me, specifically the reduce()

  // calculate total income
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  // calculate total expense
  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0 * -1)
    .toFixed(2);

  return (
    <div className="flex w-full justify-between">
      <div className="">
        <h4>Income</h4>
        <p className="text-green-700">{income}</p>
      </div>
      <div className="0">
        <h4>Expense</h4>
        <p className="text-red-700">{expense}</p>
      </div>
    </div>
  );
};
