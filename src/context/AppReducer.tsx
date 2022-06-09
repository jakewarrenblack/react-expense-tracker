import { initialState } from "./GlobalState";

type ACTIONTYPE = { type: string; payload: number };

// reducer is just a way to change the state and send it down through the app
// keep in mind we can't change the state directly, rather we give it a new state (using spread on existing data)
const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      // send down transactions where id is not the same as the id we've received in the payload
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default reducer;
