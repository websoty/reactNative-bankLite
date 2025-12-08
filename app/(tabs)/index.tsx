import ActionBtns from "@/components/ActionBtns";
import { BalanceCard } from "@/components/BalanceCard";
import DepositSheet from "@/components/BottomSheets/Deposit/DepositSheet";
import WithdrawSheet from "@/components/BottomSheets/Withdraw/WithdrawSheet";
import Header from "@/components/Header/Header";
import { TransactionsList } from "@/components/Transactions";
import { useBottomSheet } from "@/hooks/useBottomSheet";
import { RootState } from "@/store";
import { deposit, withdraw } from "@/store/financeSlice";
import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const balance = useSelector((state: RootState) => state.finance.balance);
  const dispatch = useDispatch();

  const depositSheet = useBottomSheet();
  const withdrawSheet = useBottomSheet();

  return (
    <SafeAreaView className="flex-1 bg-white">

      <View className="px-5">
        <Header />
        <BalanceCard balance={balance} />
        <ActionBtns 
        onDepositPress={depositSheet.openSheet} 
        onWithdrawPress={withdrawSheet.openSheet} />
      </View>

      <TransactionsList />

      <DepositSheet
        bottomSheetRef={depositSheet.bottomSheetRef}
        snapPoints={depositSheet.snapPoints}
        amount={depositSheet.amount}
        setAmount={depositSheet.setAmount}
        closeSheet={depositSheet.closeSheet}
        onConfirm={(value: number) => dispatch(deposit(value))}

      />

      <WithdrawSheet
        bottomSheetRef={withdrawSheet.bottomSheetRef}
        snapPoints={withdrawSheet.snapPoints}
        amount={withdrawSheet.amount}
        setAmount={withdrawSheet.setAmount}
        closeSheet={withdrawSheet.closeSheet}
        onConfirm={(value: number) => dispatch(withdraw(value))}
      />

    </SafeAreaView>
  );
}
