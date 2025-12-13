import { useEffect } from "react";
import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../store";
import { fetchRates } from "../store/financeThunk";

export default function RatesWidget() {
  const dispatch = useDispatch<AppDispatch>();

  const { rates, ratesLoading, ratesError } = useSelector(
    (state: RootState) => state.finance
  );
  
  useEffect(() => {
    dispatch(fetchRates());
  }, []);

  if (ratesLoading) {
    return (
      <View className="mt-2 px-3 py-2 rounded-xl bg-gray-100">
        <Text className="text-sm text-gray-500">Loading rates…</Text>
      </View>
    );
  }

  if (ratesError) {
    return <Text>Error:{ratesError}</Text>;
  }

  if (!rates) {
    return <Text>NO RATES</Text>;
  }


  return (
    <View className="mt-2 px-4 py-3 rounded-2xl bg-gray-100">
      <Text className="text-m text-green-700 mb-1">WIDGET</Text>

      <View className="gap-2">
        <Text className="text-base font-semibold">
          USD <Text className="text-gray-500">₴{rates.USD.toFixed(2)}</Text>
        </Text>

        <Text className="text-base font-semibold">
          EUR <Text className="text-gray-500">₴{rates.EUR.toFixed(2)}</Text>
        </Text>
      </View>
    </View>
  );
}
