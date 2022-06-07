import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  // just getting an array of amounts
  const amounts = transactions.map((transaction) => transaction.amount);

  // don't really get what this is doing, must look further into reduce()
  // it's adding them all together anyway
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4 className="text-lg">YOUR BALANCE</h4>
      <h1 className="font-semibold text-2xl">${total}</h1>
    </>
  );
};
