import ActionBtns from "@/components/ActionBtns";
import { BalanceCard } from "@/components/BalanceCard";
import Header from "@/components/Header/Header";
import { TransactionsList } from "@/components/Transactions";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView showsVerticalScrollIndicator={false} className="px-5">

        <Header />
        <BalanceCard balance={7113.35} />
        <ActionBtns />

        <Text className="text-2xl font-semibold mt-6 mb-3">
          Recent transactions
        </Text>

        <TransactionsList />

      </ScrollView>
    </SafeAreaView>
  );
}
