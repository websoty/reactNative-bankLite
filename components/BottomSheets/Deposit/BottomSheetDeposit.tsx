import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Text, TextInput, TouchableOpacity } from "react-native";

type DepositProps = {
  amount: string;
  setAmount: (v: string) => void;
  closeSheet: () => void;
};

export default function BottomSheetDeposit({ amount, setAmount, closeSheet }: DepositProps) {
  return (
    <BottomSheetView style={{ padding: 20 }}>
      <Text className="text-lg font-semibold mb-3">Deposit funds</Text>

      <TextInput
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
      />

      <TouchableOpacity className="bg-green-700 py-3 rounded-xl">
        <Text className="text-white text-center font-semibold">Confirm</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      className="bg-gray-700 py-3 rounded-xl mt-2"
      onPress={closeSheet}
      >
        <Text className="text-white text-center font-semibold">Close</Text>
      </TouchableOpacity>
    </BottomSheetView>
  );
}
