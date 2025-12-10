import { RootState } from "@/store";
import { flashError } from "@/utils/flashMsg";
import { useState } from "react";
import { Keyboard, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSelector } from "react-redux";

type WithdrawContentProps = {
  closeSheet: () => void;
  onConfirm: (value: number) => void;
};

export default function WithdrawContent({closeSheet, onConfirm,}: WithdrawContentProps) {
  const [amount, setAmount] = useState("");
  const balance = useSelector((state: RootState) => state.finance.balance);

  const handleConfirm = () => {
    const value = Number(amount);
    
    if (!value) {
      flashError('Enter a valid amount!');
      return;
    }

    if (value > balance) {
      flashError("You can't get more than your balance!");
      return;
    }
      onConfirm(value);
      closeSheet();
      setAmount("");
      Keyboard.dismiss();
  };

  return (
    <View className="bg-white p-8 rounded-2xl mx-auto w-full max-w-[450px] shadow-lg">
      <Text className="text-2xl font-bold mb-4">Withdraw funds</Text>

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
