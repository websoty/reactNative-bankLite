import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransactionsProps } from "../components/Transactions/types";

type financeState = {
  balance: number;
  transactions: TransactionsProps[];
};

const initialState: financeState = {
  balance: 7113.35,
  transactions: [],
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
  },
});

export const {deposit, withdraw } = financeSlice.actions;
export default financeSlice.reducer;