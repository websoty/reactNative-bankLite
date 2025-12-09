import TransactionsList from "@/components/Transactions/TransactionsList";
import { RootState } from "@/store";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View } from "react-native";
import { useSelector } from "react-redux";

const Tab = createMaterialTopTabNavigator();

export default function Transactions() {
  const transactions = useSelector(
    (state: RootState) => state.finance.transactions
  );
  const income = transactions.filter((t) => t.title === "Deposit");
  const outcome = transactions.filter((t) => t.title === "Withdraw");

  return (
    <View className="flex-1 bg-white pt-8">

      <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#128b61ff",
        tabBarInactiveTintColor: "gray",
        tabBarIndicatorStyle: {
        backgroundColor: "#128b61ff",
        height: 2,
        borderRadius: 20,
      },
      }}
      >
        <Tab.Screen name="all" options={{ title: "All transactions" }}>
          {() => <TransactionsList data={transactions} />}
        </Tab.Screen>

        <Tab.Screen name="incoming" options={{ title: "Incoming" }}>
          {() => <TransactionsList data={income}/>}
        </Tab.Screen>

        <Tab.Screen name="outgoing" options={{ title: "Outgoing" }}>
          {() => <TransactionsList data={outcome}/>}
        </Tab.Screen>
        
      </Tab.Navigator>
    </View>
  );
}
