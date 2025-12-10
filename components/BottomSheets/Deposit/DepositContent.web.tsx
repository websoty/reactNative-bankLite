import { useState } from "react";
import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";
import { showMessage } from "react-native-flash-message";

type DepositContentProps = {
  closeSheet: () => void; // close actual sheet
  onConfirm: (value: number) => void; // redux otpravka value
  currentBalance: number,
};


export default function DepositContent({closeSheet, onConfirm, currentBalance}: DepositContentProps) {
  const [amount, setAmount] = useState("");

  const handleConfirm = () => {
  const maxLimit = 200000;
  const value = Number(amount);

    if (value <= 0) {
      showMessage({
        message: "Enter a valid amount!",
        type: "danger",
      });
      return;
    }


    if (value + currentBalance > maxLimit) {
      const isOk = Math.max(0, maxLimit - currentBalance)
      showMessage({
        message: "Card limit is 200.000!",
        type: "danger",
        description: isOk > 0 ? `You can deposit up to $${isOk}` : "You can't deposit more!"
      })
      return;
    }
      onConfirm(value); // redux + close
      closeSheet();
      setAmount("");
      Keyboard.dismiss();
  };

  return (
    <View className="bg-white p-8 rounded-2xl mx-auto w-full max-w-[450px] shadow-lg">
      <Text className="text-2xl font-bold mb-4">Deposit funds</Text>

      <TextInput
        placeholder="Enter amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4 bg-gray-100"
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
    </View>
  );
}
