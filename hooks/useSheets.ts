import { useMemo, useRef, useState } from "react";

export function useSheets() {
  const ref = useRef<any>(null);

  const snapPoints = useMemo(() => ["25%", "40%"], []);
  type SheetType = "deposit" | "withdraw" | "settings" | null;
  const [sheetType, setSheetType] = useState<SheetType>(null);

  const openSheet = (type: SheetType) => {
    setSheetType(type);
    ref.current?.expand();
  };

  const closeSheet = () => {
    ref.current?.close();
    setSheetType(null);
  };

  return {
    ref,
    snapPoints,
    sheetType,
    openSheet,
    closeSheet,
  };
}
