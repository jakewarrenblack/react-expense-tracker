import { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const { addTransaction, transactions } = useContext(GlobalContext);

  const [values, setValues] = useState({
    id: transactions.length,
    text: "",
    amount: 0,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTransaction({ ...values });
  };

  return (
    <div>
      <h3 className="border-2 border-b-gray-400 pb-2 text-lg font-semibold">
        Add new transaction
      </h3>
      <form onSubmit={(e) => handleSubmit(e)} className="space-y-4">
        <div className="flex flex-col mt-4">
          <label htmlFor="text" className="font-semibold">
            Text
          </label>
          <input
            type="text"
            id="text"
            value={values.text}
            onChange={(e) => setValues({ ...values, text: e.target.value })}
            placeholder="Enter text..."
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="amount" className="font-semibold">
            Amount{" "}
            <span className="text-sm">
              (negative - expense, positive - income)
            </span>
          </label>
          <input
            className="mt-2"
            type="number"
            value={values.amount}
            onChange={(e) =>
              setValues({ ...values, amount: parseInt(e.target.value) })
            }
            placeholder="Enter amount..."
          />
          <button
            type="submit"
            className="bg-purple-300 p-2 uppercase text-lg mt-4 rounded-sm"
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};
