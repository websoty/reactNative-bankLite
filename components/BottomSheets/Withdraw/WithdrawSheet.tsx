import BottomSheet from "@gorhom/bottom-sheet";
import BottomSheetWithdraw from "./WithdrawContent";


export default function WithdrawSheet({
  bottomSheetRef,
  snapPoints,
  amount,
  setAmount,
  closeSheet,
  onConfirm}: any) {

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
          onConfirm={onConfirm}
        />
      </BottomSheet>
    )
}