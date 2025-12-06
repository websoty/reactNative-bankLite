import { Image, Text, View } from "react-native";

export default function Header() {
  return (
    <View className="flex-row justify-between items-center mt-8 mb-10">
      <View>
        <Text className="text-4xl font-bold">Hello!</Text>
      </View>

      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=15" }}
        className="w-16 h-16 rounded-full"
      />
    </View>
  );
}
