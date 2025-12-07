import { FlatList } from "react-native";
import { transactions } from "../../app/data/transactions";
import TransactionItem from "./TransactionItem";
export default function TransactionsList() {
  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <TransactionItem {...item} />}
      contentContainerStyle={{
        paddingHorizontal: 20,
        paddingBottom: 100,
      }}
    />
  );
}