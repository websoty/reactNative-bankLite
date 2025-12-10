import DepositContent from "@/components/BottomSheets/Deposit/DepositContent.web";
import WithdrawContent from "@/components/BottomSheets/Withdraw/WithdrawContent.web";

export function SheetsManager({
  sheetType,
  closeSheet,
  onDeposit,
  onWithdraw,
  balance,
}: any) {
  if (!sheetType) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
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
    </div>
  );
}
