import { BottomSheetView } from "@gorhom/bottom-sheet";
import { useState } from "react";
import { Keyboard, Text, TextInput, TouchableOpacity } from "react-native";
import { showMessage } from "react-native-flash-message";

type DepositContentProps = {
  closeSheet: () => void; // close actual sheet
  onConfirm: (value: number) => void; // redux otpravka value
};


export default function DepositContent({closeSheet, onConfirm,}: DepositContentProps) {
  const [amount, setAmount] = useState("");

  const handleConfirm = () => {
    const value = Number(amount);

    if (value <= 0) {
      showMessage({
        message: "Enter a valid amount!",
        type: "danger",
      });
      return;
    }
      onConfirm(value); // redux + close
      closeSheet();
      setAmount("");
      Keyboard.dismiss();
  };

  return (
    <BottomSheetView className="p-5 bg-gray-200 min-h-[300px]">
      <Text className="text-lg font-semibold mb-3">Deposit funds</Text>

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
