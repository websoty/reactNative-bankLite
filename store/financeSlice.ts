import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionsProps } from "../components/Transactions/types";

type financeState = {
  balance: number;
  transactions: TransactionsProps[];
  rates: {
    USD: number,
    EUR: number
  } | null;
  ratesLoading: boolean,
  ratesError: string | null
};

const initialState: financeState = {
  balance: 7113.35,
  transactions: [],
  rates: null,
  ratesLoading: false,
  ratesError: null
};

export const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    deposit(state, action: PayloadAction<number>) {
      const amount = action.payload;
      state.balance += amount;

      state.transactions.unshift({
        id: Date.now(),
        title: "Deposit",
        subtitle: "Account",
        amount: `$${amount.toFixed(2)}`,
        date: new Date().toLocaleDateString(),
        icon: "card",
        color: "#22c55e",
      });
    },

    withdraw(state, action: PayloadAction<number>) {
      const amount = action.payload;
      state.balance -= amount;

      state.transactions.unshift({
        id: Date.now(),
        title: "Withdraw",
        subtitle: "Account",
        amount: `-$${amount.toFixed(2)}`,
        date: new Date().toLocaleDateString(),
        icon: "card",
        color: "#ef4444",
      });
    },
    resetData:() => initialState,

    ratesStarting(state) {
      state.ratesLoading = true;
      state.ratesError = null;
    },

    ratesSuccess(state, action:PayloadAction<{ USD: number; EUR: number }>) {
      state.rates = action.payload;
      state.ratesLoading = false;
    },

    ratesFailed(state, action:PayloadAction<string>) {
      state.ratesError = action.payload;
      state.ratesLoading = false;
    }
  },

});

export const {deposit, withdraw, resetData, ratesStarting, ratesSuccess, ratesFailed, } = financeSlice.actions;
export default financeSlice.reducer;