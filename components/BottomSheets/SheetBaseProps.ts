export type SheetBaseProps = {
  amount: string;
  setAmount: (v: string) => void;
  closeSheet: () => void;
  onConfirm: (value: number) => void;
};