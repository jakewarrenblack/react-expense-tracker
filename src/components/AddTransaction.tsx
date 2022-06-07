import { useState } from "react";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <h3 className="border-2 border-b-gray-400 pb-2 text-lg font-semibold">
        Add new transaction
      </h3>
      <form className="space-y-4">
        <div className="flex flex-col mt-4">
          <label htmlFor="text" className="font-semibold">
            Text
          </label>
          <input
            type="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
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
            value={amount}
            onChange={(e) => setAmount(parseInt(e.target.value))}
            placeholder="Enter amount..."
          />
          <button className="bg-purple-300 p-2 uppercase text-lg mt-4 rounded-sm">
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
};
