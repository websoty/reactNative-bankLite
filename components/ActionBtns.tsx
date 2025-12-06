import { Text, TouchableOpacity, View } from "react-native";

export default function ActionBtns() {
  return (
    <View className="flex-row items-center justify-between mt-4">
      <TouchableOpacity className="flex-1 py-3 border border-gray-300 rounded-xl mr-2">
        <Text className="text-center text-green-700 font-semibold text-2xl">
          Deposit
        </Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex-1 py-3 border border-gray-300 rounded-xl mr-2 bg-green-700">
        <Text className="text-center text-white font-semibold text-2xl">
          Withdraw
        </Text>
      </TouchableOpacity>
    </View>
  );
}
