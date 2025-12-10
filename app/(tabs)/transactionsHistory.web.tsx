import TransactionsList from "@/components/Transactions/TransactionsList";
import { RootState } from "@/store";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

export default function Transactions() {
  const transactions = useSelector((state: RootState) => state.finance.transactions);
  const [tab, setTab] = useState<"all" | "incoming" | "outgoing">("all");

  const income = transactions.filter(t => t.title === "Deposit");
  const outcome = transactions.filter(t => t.title === "Withdraw");

  return (
    <View className="w-full max-w-[800px] mx-auto pt-12">

      <View className="flex-row justify-center gap-4 mb-6">
        <TouchableOpacity
          onPress={() => setTab("all")}
          className={`px-10 py-2 rounded-xl ${
            tab === "all" ? "bg-green-600" : "bg-gray-200"
          }`}
        >
          <Text className={tab === "all" ? "text-white" : "text-gray-600"}>
            All
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setTab("incoming")}
          className={`px-10 py-2 rounded-xl ${
            tab === "incoming" ? "bg-green-600" : "bg-gray-200"
          }`}
        >
          <Text className={tab === "incoming" ? "text-white" : "text-gray-600"}>
            Incoming
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setTab("outgoing")}
          className={`px-10 py-2 rounded-xl ${
            tab === "outgoing" ? "bg-green-600" : "bg-gray-200"
          }`}
        >
          <Text className={tab === "outgoing" ? "text-white" : "text-gray-600"}>
            Outgoing
          </Text>
        </TouchableOpacity>
      </View>

      {tab === "all" && <TransactionsList data={transactions} />}
      {tab === "incoming" && <TransactionsList data={income} />}
      {tab === "outgoing" && <TransactionsList data={outcome} />}
    </View>
  );
}