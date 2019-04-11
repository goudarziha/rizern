import {
  GET_EXPENSES,
  ADD_EXPENSE,
  GET_MISC,
  SORT_HIGH,
  SORT_LOW
} from "../actions/types";

let initialState = {
  expenses: [],
  error: null,
  withdraw: 0,
  account: 2000,
  food: 0,
  fun: 0,
  transportation: 0,
  housing: 0,
  misc: 0,
  initialExpenses: 0,
  totalWithdraw: 0,
  sort: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPENSE:
      console.log("ADDING EXP");
      let expenses = [action.payload, ...state.expenses];
      if (state.sort === "high") {
        expenses.sort(function(a, b) {
          return b.amount - a.amount;
        });
      } else if (state.sort === "low") {
        expenses.sort(function(a, b) {
          return a.amount - b.amount;
        });
      }
      return {
        ...state,
        expenses: expenses,
        account: state.account - action.payload.amount,
        totalWithdraw: (state.totalWithdraw += action.payload.amount)
      };
    case GET_EXPENSES:
      console.log("GETTING EXPENSES");
      return {
        ...state,
        expenses: action.payload
      };
    case GET_MISC:
      console.log("GETTING MISC");
      return {
        ...state,
        food: action.payload.food,
        fun: action.payload.fun,
        initialExpenses: action.payload.initialExpenses,
        housing: action.payload.housing,
        transportation: action.payload.transportation,
        misc: action.payload.misc,
        account: state.account - action.payload.initialExpenses
      };
    case SORT_HIGH:
      console.log("SORTING HIGHEST");
      let highExpense = state.expenses.sort(function(a, b) {
        return b.amount - a.amount;
      });
      return {
        ...state,
        sort: "high",
        expenses: highExpense.slice() //uhh
      };
    case SORT_LOW:
      console.log("SORTING LOWEST");
      let lowExpense = state.expenses.sort(function(a, b) {
        return a.amount - b.amount;
      });
      return {
        ...state,
        sort: "low",
        expenses: lowExpense.slice()
      };
    default:
      return state;
  }
};

export default reducer;
