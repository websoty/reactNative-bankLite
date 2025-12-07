import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { TransactionsProps } from "./types";

export default function Transactions({
  title,
  subtitle,
  amount,
  date,
  icon,
  color = "black",
}: TransactionsProps) {
  return (
    <View className="flex-row justify-between items-center bg-white p-4 rounded-xl shadow-sm">
      <View className="flex-row items-center">
        <Ionicons name={icon} size={34} color={color} />

        <View className="ml-3">
          <Text className="font-semibold text-xl">{title}</Text>
          <Text className="text-gray-500 text-sm text-xl">{subtitle}</Text>
        </View>
      </View>

      <View className="items-end">
        <Text className="font-normal text-2xl">{amount}</Text>
        <Text className="text-gray-500 text-sm text-xl">{date}</Text>
      </View>
    </View>
  );
}
