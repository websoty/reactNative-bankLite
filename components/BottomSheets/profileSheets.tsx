import { BottomSheetView } from "@gorhom/bottom-sheet";
import { Pressable, Text } from "react-native";



export default function ProfileSheets({closeSheet: closeSheet}: any) {
  return (
    <BottomSheetView className="bg-white-200 p-4 rounded-xl pb-10">
      <Text className="text-4xl font-semibold mb-7">Settings</Text>
      <Pressable className="bg-red-600 py-3 rounded-xl mb-3">
        <Text className="text-white text-2xl text-center">Log out</Text>
      </Pressable>
      <Pressable 
      onPress={closeSheet} 
      className="bg-white border border-gray-400 py-3 rounded-xl">
        <Text className="text-2xl text-center">Cancel</Text>
      </Pressable>
    </BottomSheetView>
    
  )
}