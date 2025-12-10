import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function Rates() {
  return (
    <View className="flex-1 bg-white pt-8">

      <View className="flex-row items-center px-4 py-3 border-b border-gray-200">
        <Pressable onPress={() => router.back()} className="mr-3">
          <Ionicons name="arrow-back" size={26} color="#128b61" />
        </Pressable>

        <Text className="text-xl font-semibold">News Bloomberg</Text>
      </View>

      <WebView
        source={{ uri: "https://www.bloomberg.com/europe" }}
        style={{ flex: 1 }}
      />
    </View>
  );
}
