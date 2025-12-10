import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function ProfileWeb() {
  const [email, setEmail] = useState("example@example.com");
  const [tempEmail, setTempEmail] = useState(email);

  const [modalSettingsOpen, setModalSettingsOpen] = useState(false);
  const [modalEditOpen, setModalEditOpen] = useState(false);

  const saveEmail = () => {
    setEmail(tempEmail);
    setModalEditOpen(false);
  };

  const logout = () => {
    console.log("LOGOUT");
    setModalSettingsOpen(false);
  };

  return (
    <View className="flex-1 justify-center items-center bg-white pt-10">

      <Image
        source={{ uri: "https://i.pravatar.cc/150?img=22" }}
        className="w-32 h-32 rounded-full mb-6"
      />

      <View className="flex-row items-center gap-3 mb-3">
        <Text className="text-2xl">{email}</Text>
        <Pressable onPress={() => {
          setTempEmail(email);
          setModalEditOpen(true);
        }}>
          <Ionicons name="create-outline" size={22} color="gray" />
        </Pressable>
      </View>

      <Pressable
        onPress={() => setModalSettingsOpen(true)}
        className="bg-gray-200 py-3 px-4 rounded-xl w-1/2 max-w-[300px]"
      >
        <Text className="text-xl text-center">Settings</Text>
      </Pressable>


      {modalSettingsOpen && (
        <View className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-[1000]">
          
          <View className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-[400px]">

            <Text className="text-2xl font-bold mb-6">Settings</Text>

            <Pressable
              onPress={logout}
              className="bg-red-600 py-3 rounded-xl mb-4"
            >
              <Text className="text-white text-center font-semibold">Log Out</Text>
            </Pressable>

            <Pressable
              onPress={() => setModalSettingsOpen(false)}
              className="bg-gray-700 py-3 rounded-xl"
            >
              <Text className="text-white text-center font-semibold">Cancel</Text>
            </Pressable>

          </View>
        </View>
      )}


      {modalEditOpen && (
        <View className="fixed inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center z-[1000]">
          
          <View className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-[400px]">

            <Text className="text-2xl font-bold mb-4">Edit Email</Text>

            <TextInput
              value={tempEmail}
              onChangeText={setTempEmail}
              className="border border-gray-300 rounded-xl px-4 py-3 mb-4 bg-gray-100"
              placeholder="Enter new email"
            />

            <Pressable
              onPress={saveEmail}
              className="bg-green-700 py-3 rounded-xl mb-2"
            >
              <Text className="text-white text-center font-semibold">Save</Text>
            </Pressable>

            <Pressable
              onPress={() => setModalEditOpen(false)}
              className="bg-gray-700 py-3 rounded-xl"
            >
              <Text className="text-white text-center font-semibold">Cancel</Text>
            </Pressable>

          </View>
        </View>
      )}

    </View>
  );
}
