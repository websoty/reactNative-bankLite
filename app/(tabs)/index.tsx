import ActionBtns from "@/components/ActionBtns";
import { BalanceCard } from "@/components/BalanceCard";
import DepositSheet from "@/components/BottomSheets/Deposit/DepositSheet";
import Header from "@/components/Header/Header";
import { TransactionsList } from "@/components/Transactions";
import { useDepositSheet } from "@/hooks/useDepositSheet";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const {
    bottomSheetRef,
    snapPoints,
    amount,
    setAmount,
    openSheet,
    closeSheet,
  } = useDepositSheet();

  return (
    <SafeAreaView className="flex-1 bg-white">

      <View className="px-5">
        <Header />
        <BalanceCard balance={7113.35} />
        <ActionBtns onDepositPress={openSheet} />
      </View>

      <TransactionsList />

      <DepositSheet
        bottomSheetRef={bottomSheetRef}
        snapPoints={snapPoints}
        amount={amount}
        setAmount={setAmount}
        closeSheet={closeSheet}
      />

    </SafeAreaView>
  );
}
