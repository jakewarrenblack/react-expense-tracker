// If this were a larger application with eg profiles,
// we might have a profile context
// this is very small, so only need a single global state

import { createContext, ReactNode, useReducer } from "react";
import AppReducer from "./AppReducer";

export type Transaction = {
  id: number;
  text: string;
  amount: number;
};

export type GlobalContextType = {
  transactions: Transaction[];
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: Transaction) => void;
};

// expense = negative, income = positive
export const initialState: {
  transactions: Transaction[];
} = {
  transactions: [
    { id: 1, text: "Mouse", amount: -20 },
    { id: 2, text: "Wages", amount: 300 },
    { id: 3, text: "Beer", amount: -10 },
    { id: 4, text: "Sold camera", amount: 150 },
  ],
};

// We export so we can bring it into other files and use the context
export const GlobalContext = createContext<GlobalContextType>({
  transactions: initialState.transactions,
  deleteTransaction: () => {},
  addTransaction: () => {},
});

// In order for other components to access the state, they need to be wrapped in a provider

// We use children, because things are going to be wrapped within this context
export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  // takes the reducer method and the initial state
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  const deleteTransaction = (id: number) => {
    // we send an object to the reducer through our dispatch method
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  };

  const addTransaction = (transaction: Transaction) => {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  };

  // the children will then be whatever we've wrapped inside the context,
  // which then provides state and actions to its children
  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction: deleteTransaction,
        addTransaction: addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
