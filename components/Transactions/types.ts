import { Ionicons } from "@expo/vector-icons";

export type TransactionsProps = {
  id: number,
  title: string;
  subtitle: string;
  amount: string;
  date: string;
  icon: keyof typeof Ionicons.glyphMap;
  color?: string;
};
