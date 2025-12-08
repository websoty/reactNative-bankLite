import ActionBtns from "@/components/ActionBtns";
import { BalanceCard } from "@/components/BalanceCard";
import { SheetsManager } from "@/components/BottomSheets/SheetsManager";
import Header from "@/components/Header/Header";
import { TransactionsList } from "@/components/Transactions";
import { useSheets } from "@/hooks/useSheets";
import { RootState } from "@/store";
import { deposit, withdraw } from "@/store/financeSlice";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
export default function Home() {
  const dispatch = useDispatch();
  const balance = useSelector((state: RootState) => state.finance.balance);

  const { ref, snapPoints, sheetType, openSheet, closeSheet } = useSheets();

  return (
    <SafeAreaView className="flex-1 bg-white">
      
      <View className="px-5">
        <Header />
        <BalanceCard balance={balance}/>
        <ActionBtns
          onDepositPress={() => openSheet("deposit")}
          onWithdrawPress={() => openSheet("withdraw")}
        />
      </View>

      <TransactionsList/>

      <SheetsManager
        ref={ref}
        snapPoints={snapPoints}
        sheetType={sheetType}
        closeSheet={closeSheet}
        onDeposit={(value: number) => dispatch(deposit(value))}
        onWithdraw={(value: number) => dispatch(withdraw(value))}
      />
    </SafeAreaView>
  );
}
