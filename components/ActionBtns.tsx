import { Text, TouchableOpacity, View } from "react-native";
type Props = {
  onDepositPress: () => void;
  onWithdrawPress: () => void;
};



export default function ActionBtns({onDepositPress, onWithdrawPress }: Props) {
  return (
    <View className="flex-row items-center justify-between mt-4">

      <TouchableOpacity
        className="flex-1 py-3 border border-gray-300 rounded-xl mr-2"
        onPress={onDepositPress}
      >
        <Text className="text-center text-green-600 font-semibold">Deposit</Text>
      </TouchableOpacity>

      <TouchableOpacity 
      className="flex-1 py-3 bg-green-600 rounded-xl ml-2"
      onPress={onWithdrawPress}
      >
        <Text className="text-center text-white font-semibold">Withdraw</Text>
      </TouchableOpacity>

    </View>
  );
}
