import { Ionicons } from "@expo/vector-icons";

export const transactions = [
  {
    title: "Deposit",
    subtitle: "April",
    amount: "€5,000.00",
    date: "April 20",
    icon: "card" as keyof typeof Ionicons.glyphMap,
  },
  {
    title: "Apple",
    subtitle: "Apple",
    amount: "€99.99",
    date: "April 19",
    icon: "bag" as keyof typeof Ionicons.glyphMap,
    color: "#228B22",
  },
  {
    title: "Amazon",
    subtitle: "Amazon",
    amount: "€250.00",
    date: "April 17",
    icon: "cube" as keyof typeof Ionicons.glyphMap,
    color: "#9370DB",
  },
];
