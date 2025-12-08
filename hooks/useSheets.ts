import { useMemo, useRef, useState } from "react";

export function useSheets() {
  const ref = useRef<any>(null);

  const snapPoints = useMemo(() => ["25%", "40%"], []);
  const [sheetType, setSheetType] = useState<"deposit" | "withdraw" | null>(null);

  const openSheet = (type: "deposit" | "withdraw") => {
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
