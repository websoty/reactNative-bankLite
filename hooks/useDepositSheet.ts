import BottomSheet from "@gorhom/bottom-sheet";
import { useMemo, useRef, useState } from "react";

export function useDepositSheet() {
  const bottomSheetRef = useRef<React.ComponentRef<typeof BottomSheet>>(null);

  const snapPoints = useMemo(() => ["30%", "20%"], []);

  const [amount, setAmount] = useState("");

  const openSheet = () => {
    (bottomSheetRef.current as any)?.expand();

  };

  const closeSheet = () => {
    (bottomSheetRef.current as any)?.close();

  };

  return {
    bottomSheetRef,
    snapPoints,
    amount,
    setAmount,
    openSheet,
    closeSheet,
  };
}
