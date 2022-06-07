export const TransactionList = () => {
  return (
    <>
      <h3 className="font-semibold">History</h3>
      <ul className="list border-y-2 border-gray-400 py-2">
        <li className="flex justify-between">
          Cash
          <span>-$400</span>
          <button className="border bg-red-700 text-white border-none rounded-lg h-min w-4">
            x
          </button>
        </li>
      </ul>
    </>
  );
};
