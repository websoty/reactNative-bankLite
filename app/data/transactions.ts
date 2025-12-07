import { Ionicons } from "@expo/vector-icons";

export const transactions = [
  {
    id: 1,
    title: "Deposit",
    subtitle: "April",
    amount: "$5,000.00",
    date: "April 20",
    icon: "card" as keyof typeof Ionicons.glyphMap,
  },
  {
    id: 2,
    title: "Apple",
    subtitle: "Apple",
    amount: "$99.99",
    date: "April 19",
    icon: "bag" as keyof typeof Ionicons.glyphMap,
    color: "#228B22",
  },
  {
    id: 3,
    title: "Amazon",
    subtitle: "Amazon",
    amount: "$250.00",
    date: "April 17",
    icon: "cube" as keyof typeof Ionicons.glyphMap,
    color: "#9370DB",
  },
  {
    id: 4,
    title: "Netflix",
    subtitle: "Netflix",
    amount: "$9.99",
    date: "April 16",
    icon: "tv" as keyof typeof Ionicons.glyphMap,
    color: "#FF0000",
  },
  {
    id: 5,
    title: "Auchan",
    subtitle: "Auchan",
    amount: "$51.30",
    date: "April 17",
    icon: "server" as keyof typeof Ionicons.glyphMap,
    color: "#70c2dbff",
  },
  {
    id: 6,
    title: "Pivas",
    subtitle: "April",
    amount: "$16.20",
    date: "April 14",
    icon: "beer" as keyof typeof Ionicons.glyphMap,
    color: "#e7dd50ff"
  },
  {
    id: 7,
    title: "GYM",
    subtitle: "April",
    amount: "$76.00",
    date: "April 7",
    icon: "barbell" as keyof typeof Ionicons.glyphMap,
    color: "#3d3d39ff"
  }
];
