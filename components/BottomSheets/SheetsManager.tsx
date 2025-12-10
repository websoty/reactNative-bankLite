import DepositContent from "@/components/BottomSheets/Deposit/DepositContent";
import WithdrawContent from "@/components/BottomSheets/Withdraw/WithdrawContent";
import BottomSheet from "@gorhom/bottom-sheet";

export function SheetsManager({ ref, snapPoints, sheetType, closeSheet, onDeposit, onWithdraw, balance}: any) {
  return (
    <BottomSheet
      ref={ref}
      snapPoints={snapPoints}
      index={-1}
      enablePanDownToClose
      onClose={closeSheet}
    >
      {sheetType === "deposit" && (
        <DepositContent
          onConfirm={onDeposit}
          closeSheet={closeSheet}
          currentBalance={balance}
        />
      )}

      {sheetType === "withdraw" && (
        <WithdrawContent
          onConfirm={onWithdraw}
          closeSheet={closeSheet}
        />
      )}
    </BottomSheet>
  );
}
