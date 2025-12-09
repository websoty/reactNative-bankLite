import ProfileSheets from "@/components/BottomSheets/profileSheets";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function Profile() {
  const [email, setEmail] = useState("example@example.com");
  const [editing, setEditing] = useState(false);
  const [tempEmail, setTempEmail] = useState("");

  const save = () => {
    setEmail(tempEmail);
    setEditing(false);
  };

  const cancel = () => {
    setEditing(false);
    setTempEmail("");
  }

  return (
    <>
      <View className="flex-1 justify-center items-center bg-white">
        <Image
          source={{ uri: "https://i.pravatar.cc/150?img=22" }}
          className="w-28 h-28 rounded-full mb-4"
        />

        {!editing && (
          <View className="flex-row items-center gap-3 mb-3">
            <Text className="text-xl">{email}</Text>
            <Pressable onPress={() => setEditing(!editing)}>
              <Ionicons name="create-outline" size={20} color="gray" />
            </Pressable>
          </View>
        )}
        {editing && (
          <>
          <View className="w-full px-10 mb-6">
            <TextInput
              value={tempEmail}
              onChangeText={setTempEmail}
              className="border border-gray-400 rounded-xl p-3 mb-3"
              placeholder="Enter new email"
            />

            <View className="flex-row justify-center gap-2">
            <Pressable onPress={save} className="bg-green-600 py-3 rounded-xl w-1/2">
              <Text className="text-white text-center font-semibold">Save</Text>
            </Pressable>
            <Pressable onPress={cancel} className="bg-red-600 py-3 rounded-xl w-1/2">
              <Text className="text-white text-center font-semibold">Cancel</Text>
            </Pressable>
            </View>

          </View>
          </>
        )}

        <Pressable className="bg-gray-200 py-3 px-4 rounded-xl w-1/2">
          <Text className="text-xl text-center">Settings</Text>
        </Pressable>

      </View>
      <View>
        <ProfileSheets />
      </View>
    </>
  );
}
