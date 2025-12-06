import { FlatList, View } from "react-native";
import { transactions } from "../../app/data/transactions";
import TransactionItem from "./TransactionsItem";
export default function TransactionsList() {
  return (
    <FlatList
      data={transactions}
      keyExtractor={(item) => item.title}
      renderItem={({ item }) => (
        <View className="mb-4 px-5">
          <TransactionItem {...item} />
        </View>
      )}
      showsVerticalScrollIndicator={false}
    />
  );
}
