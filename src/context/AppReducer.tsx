import { initialState } from "./GlobalState";

type ACTIONTYPE = { type: ""; payload: number };

const reducer = (state: typeof initialState, action: ACTIONTYPE) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
