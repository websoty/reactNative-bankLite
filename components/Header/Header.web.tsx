import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { CurrencyBtcIcon } from "phosphor-react-native";
import React from "react";
import { Image, Pressable, Text, View } from "react-native";
import Circle from "../../components/circle";

type HeaderProps = {
  progressLimit: number;
  limit: number;
  balance: number;
};

export default function HeaderWeb({ progressLimit, limit, balance }: HeaderProps) {
  console.log("HEADER WEB VERSION");

  return (
    <View style={{ width: "100%", maxWidth: 1000, marginHorizontal: "auto" }}>
      
      <View className="flex-row justify-between items-center mt-12 mb-12 px-8">
        <Text className="text-6xl font-bold">Hello!</Text>

        <View className="relative w-28 h-28 items-center justify-center">
          <Image
            source={{ uri: "https://i.pravatar.cc/150?img=15" }}
            className="w-24 h-24 rounded-full"
          />
          <View className="absolute inset-0 items-center justify-center">
            <Circle size={110} progress={progressLimit} />
          </View>
        </View>
      </View>

      <View className="items-center mb-10">
        <Text className="text-xl font-semibold">
          Available balance / Limit balance:
          <Text className="text-gray-500"> ${balance.toLocaleString()} / ${limit.toLocaleString()}</Text>
        </Text>
      </View>

      <View className="w-full flex-row justify-between gap-6 mb-14 px-8">

        <Pressable
          onPress={() => router.push("/news")}
          className="flex-1 items-center justify-center py-6 rounded-2xl bg-gray-200"
        >
          <Ionicons name="globe-outline" size={40} color="#60aeeeff" />
          <Text className="text-xl font-semibold mt-2">Recent News</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/rates")}
          className="flex-1 items-center justify-center py-6 rounded-2xl bg-gray-200"
        >
          <Ionicons name="cash-outline" size={40} color="#128b61" />
          <Text className="text-xl font-semibold mt-2">Exchange rates</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/crypto")}
          className="flex-1 items-center justify-center py-6 rounded-2xl bg-gray-200"
        >
          <CurrencyBtcIcon size={44} color="#d6bd4eff" />
          <Text className="text-xl font-semibold mt-2">Crypto prices</Text>
        </Pressable>

      </View>
    </View>
  );
}
