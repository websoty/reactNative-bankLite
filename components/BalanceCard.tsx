import { Text, View } from "react-native";

type Money = {
  balance: number;
};

export function BalanceCard({ balance }: Money) {
  return (
    <View className="bg-[#F0F8FF] p-8 rounded-2xl mx-2">
      <Text className="text-gray-600 mb-2 text-xl">Balance</Text>

      <Text className="text-5xl font-bold mb-4">
        ${balance.toLocaleString()}
      </Text>
    </View>
  );
}
