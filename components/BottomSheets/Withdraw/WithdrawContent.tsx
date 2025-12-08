import { BottomSheetView } from "@gorhom/bottom-sheet";
import { useState } from "react";
import { Keyboard, Text, TextInput, TouchableOpacity } from "react-native";

type WithdrawContentProps = {
  closeSheet: () => void;
  onConfirm: (value: number) => void;
};

export default function WithdrawContent({closeSheet, onConfirm,}: WithdrawContentProps) {
  const [amount, setAmount] = useState("");

  const handleConfirm = () => {
    const value = Number(amount);
    if (value > 0) {
      onConfirm(value);
      closeSheet();
      setAmount("");
      Keyboard.dismiss();
    }
  };

  return (
    <BottomSheetView className="p-5 bg-gray-200 min-h-[300px]">
      <Text className="text-lg font-semibold mb-3">Withdraw funds</Text>

      <TextInput
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 bg-white"
      />

      <TouchableOpacity
        className="bg-green-700 py-3 rounded-xl"
        onPress={handleConfirm}
      >
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
