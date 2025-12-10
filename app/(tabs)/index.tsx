import ActionBtns from "@/components/ActionBtns";
import { BalanceCard } from "@/components/BalanceCard";
import { SheetsManager } from "@/components/BottomSheets/SheetsManager";
import Header from "@/components/Header/Header";
import { TransactionsList } from "@/components/Transactions";
import useCircleProgress from "@/hooks/useCircleProgress";
import { useSheets } from "@/hooks/useSheets";
import { store } from "@/store";
import { deposit, withdraw } from "@/store/financeSlice";
import { saveData } from "@/utils/storage";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";

export default function Home() {
  const dispatch = useDispatch();
  // const balance = useSelector((state: RootState) => state.finance.balance);
  const {balance, progressLimit, limit} = useCircleProgress(200000);
  const { ref, snapPoints, sheetType, openSheet, closeSheet } = useSheets();


  return (
    <SafeAreaView className="flex-1 bg-white">
      
      <View className="px-5">
        <Header progressLimit={progressLimit} limit={limit} balance={balance}/>
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
        balance={balance}
        onDeposit={(value: number) => {dispatch(deposit(value))
          saveData(store.getState().finance);
         }}
        onWithdraw={(value: number) => {dispatch(withdraw(value))
          saveData(store.getState().finance);
        }}
      />
    </SafeAreaView>
  );
}
