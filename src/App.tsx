import "./App.css";
import { AddTransaction } from "./components/AddTransaction";
import { Balance } from "./components/Balance";
import { Header } from "./components/Header";
import { IncomeExpenses } from "./components/IncomeExpenses";
import { TransactionList } from "./components/TransactionList";

function App() {
  return (
    <div className="flex justify-center w-screen flex-col items-center h-screen bg-slate-300">
      <div className="flex flex-col bg-white p-5 rounded">
        <Header />
        <div className="space-y-4">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </div>
  );
}

export default App;
