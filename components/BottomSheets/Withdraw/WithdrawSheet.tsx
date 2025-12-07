import BottomSheet from "@gorhom/bottom-sheet";
import BottomSheetWithdraw from "./BottomSheetWithdraw";


export default function WithdrawSheet({
  bottomSheetRef,
  snapPoints,
  amount,
  setAmount,
  closeSheet,}: any) {

    return (
      <BottomSheet
       ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose
      >
        <BottomSheetWithdraw
          amount={amount}
          setAmount={setAmount}
          closeSheet={closeSheet}
        />
      </BottomSheet>
    )
}