import ActionBtns from "@/components/ActionBtns";
import { BalanceCard } from "@/components/BalanceCard";
import DepositSheet from "@/components/BottomSheets/Deposit/DepositSheet";
import WithdrawSheet from "@/components/BottomSheets/Withdraw/WithdrawSheet";
import Header from "@/components/Header/Header";
import { TransactionsList } from "@/components/Transactions";
import { useBottomSheet } from "@/hooks/useBottomSheet";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const deposit = useBottomSheet();
  const withdraw = useBottomSheet();

  return (
    <SafeAreaView className="flex-1 bg-white">

      <View className="px-5">
        <Header />
        <BalanceCard balance={7113.35} />
        <ActionBtns onDepositPress={deposit.openSheet} onWithdrawPress={withdraw.openSheet} />
      </View>

      <TransactionsList />

      <DepositSheet
        bottomSheetRef={deposit.bottomSheetRef}
        snapPoints={deposit.snapPoints}
        amount={deposit.amount}
        setAmount={deposit.setAmount}
        closeSheet={deposit.closeSheet}
      />

      <WithdrawSheet
        bottomSheetRef={withdraw.bottomSheetRef}
        snapPoints={withdraw.snapPoints}
        amount={withdraw.amount}
        setAmount={withdraw.setAmount}
        closeSheet={withdraw.closeSheet}
      />

    </SafeAreaView>
  );
}
