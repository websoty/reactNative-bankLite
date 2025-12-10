import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { CurrencyBtcIcon } from "phosphor-react-native";
import { Image, Pressable, Text, View } from "react-native";
import Circle from "../../components/circle";

type HeaderProps = {
  progressLimit: number,
  limit: number,
  balance: number
};

export default function Header({progressLimit, limit, balance}:HeaderProps) {
  return (
    <>
    <View className="flex-row justify-between items-center mt-8 mb-5 px-4">
        <View>
          <Text className="text-4xl font-bold">Hello!</Text>
        </View>

      <View className="relative w-16 h-16 items-center justify-center">
          <Image
          source={{ uri: "https://i.pravatar.cc/150?img=15" }}
          className="w-16 h-16 rounded-full"
        />
          <View className="absolute inset-0 items-center justify-center">
          <Circle size={70} progress={progressLimit} />   
        </View>
      </View>
    </View>
          <View className="flex-row justify-center mb-4 gap-1 px-2">
            <Text className="text-m font-semibold">Available balance / Limit balance:</Text>
            <Text className="text-m font-semibold text-right text-gray-500">
              ${balance.toLocaleString()} / ${limit.toLocaleString()}
            </Text>
          </View>

      <View className="flex-row justify-between gap-2 mb-4">

        <Pressable 
        onPress={() => router.push("/news")}
        className="items-center justify-end gap-1 bg-gray-200 py-2 px-2 rounded-xl ">
          <Ionicons name="globe-outline" size={28} color="#60aeeeff" />
          <Text className="text-lg font-semibold">Recent News</Text>
        </Pressable>
        
        <Pressable 
        onPress={() => router.push("/rates")}
        className="items-center justify-end gap-1 bg-gray-200 py-2 px-2 rounded-xl ">
          <Ionicons name="cash-outline" size={28} color="#128b61" />
          <Text className="text-lg font-semibold">Exchange rates</Text>
        </Pressable>

        <Pressable 
        onPress={() => router.push("/crypto")}
        className="items-center justify-end gap-1 bg-gray-200 py-2 px-2 rounded-xl ">
          <CurrencyBtcIcon size={32} color="#d6bd4eff" />
          <Text className="text-lg font-semibold">Crypto prices</Text>
        </Pressable>
      </View>
    </>
  );
}
