import { fakeTransactions } from "@/app/data/fakeTransactions";
import { RootState } from "@/store";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import TransactionItem from "./TransactionItem";
export default function TransactionsList() {
  const transactions = useSelector((state: RootState) => state.finance.transactions);

  const allTransactions = [...transactions, ...fakeTransactions];
  return (
    <FlatList
      data={allTransactions}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <TransactionItem {...item} />}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingBottom: 100,
      }}
    />
  );
}