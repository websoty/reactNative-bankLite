import BottomSheet from "@gorhom/bottom-sheet";
import BottomSheetDeposit from "./DepositContent";

export default function DepositSheet({
  bottomSheetRef,
  snapPoints,
  amount,
  setAmount,
  closeSheet,
  onConfirm,
}: any) {

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={snapPoints}
      enablePanDownToClose
    >
      <BottomSheetDeposit
        amount={amount}
        setAmount={setAmount}
        closeSheet={closeSheet}
        onConfirm={onConfirm}
      />
    </BottomSheet>
  );
}
