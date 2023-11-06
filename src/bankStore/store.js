import { createStore } from "redux";

const initialState = {
  balance: 0,
  name: "",
  mobile: null,
};

export const ACTIONS = {
  DEPOSIT: "deposit",
  WITHDRAW: 'withdraw',
  NAME: "nameUpdate",
  MOBILE: "mobileUpdate",
};

// console.log(ACTIONS);

const accountReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ACTIONS.DEPOSIT:
      return { ...state, balance: state.balance + +actions.payload };
    case ACTIONS.WITHDRAW: 
        return {...state, balance: state.balance - +actions.payload}
    case ACTIONS.NAME:
        return {...state, name: actions.payload}
    case ACTIONS.MOBILE:
        return {...state, mobile: actions.payload}
    default:
        return state
  }
};

const accountStore = createStore(accountReducer)
// console.log(accountStore.getState());

// accountStore.dispatch({type:ACTIONS.DEPOSIT, payload: 2000});
// console.log(accountStore.getState());

// accountStore.dispatch({type:ACTIONS.WITHDRAW, payload: 201});
// console.log(accountStore.getState());

// accountStore.dispatch({type:ACTIONS.NAME, payload: "JP"});
// console.log(accountStore.getState());

// accountStore.dispatch({type:ACTIONS.MOBILE, payload: 8099099546});
// console.log(accountStore.getState());

export default accountStore
