import axios from "axios";
import {
  CREATE_EXPENSE,
  GET_EXPENSES,
  ADD_EXPENSE,
  GET_MISC,
  GET_EXPENSES_ERROR,
  SORT_HIGH,
  SORT_LOW
} from "./types";

const apiUrl =
  "https://app.fakejson.com/q/0Pm3bJKu?token=HbqwPS-BSqOehLpig2ePqg";

contains = (original, sub) => {
  return original.toLowerCase().includes(sub);
};

export const getExpenses = () => {
  return dispatch => {
    axios
      .get(apiUrl)
      .then(res => {
        let food = 0;
        let fun = 0;
        let transportation = 0;
        let housing = 0;
        let misc = 0;
        let initialExpenses = 0;

        res.data.transactions.forEach(item => {
          initialExpenses += item.amount;
          if (
            this.contains(item.name, "sweet") ||
            this.contains(item.name, "7") ||
            this.contains(item.name, "shake") ||
            this.contains(item.name, "trader")
          ) {
            food += item.amount;
          } else if (
            this.contains(item.name, "rent") ||
            this.contains(item.name, "util") ||
            this.contains(item.name, "cable")
          ) {
            housing += item.amount;
          } else if (this.contains(item.name, "club")) {
            fun += item.amount;
          } else if (this.contains(item.name, "uber")) {
            transportation += item.amount;
          } else {
            misc += item.amount;
          }
        });
        dispatch({
          type: GET_EXPENSES,
          payload: res.data.transactions
        });
        dispatch({
          type: GET_MISC,
          payload: {
            food: food,
            initialExpenses: initialExpenses,
            fun: fun,
            misc: misc,
            housing: housing,
            transportation: transportation
          }
        });
      })
      .catch(err => {
        dispatch({ type: GET_EXPENSES_ERROR, payload: err });
      });
  };
};

export const getAllExpenses = () => {
  return dispatch => {
    return axios
      .get(apiUrl)
      .then(res => {
        dispatch({
          type: GET_EXPENSES,
          expenses: res.data.transactions
        });
      })
      .catch(err => {
        throw err;
      });
  };
};

export const createExpense = data => {
  console.log(data);
  return {
    type: ADD_EXPENSE,
    payload: {
      name: "Withdrawal",
      amount: data
    }
  };
};

export const sortHigh = () => {
  return {
    type: SORT_HIGH,
    payload: "high"
  };
};

export const sortLow = () => {
  return {
    type: SORT_LOW,
    payload: "low"
  };
};
