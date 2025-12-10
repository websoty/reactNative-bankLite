import { resetData } from "@/store/financeSlice";
import { BottomSheetView } from "@gorhom/bottom-sheet";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Pressable, Text } from "react-native";
import { showMessage } from "react-native-flash-message";
import { useDispatch } from "react-redux";

export default function ProfileSheets({ closeSheet: closeSheet }: any) {

  const dispatch = useDispatch();

  async function logOut() {
    await AsyncStorage.clear();
    dispatch(resetData());

    showMessage({
      message: "Reset data successfully",
      type: "success",
    });
    closeSheet();
  }

  return (
    <BottomSheetView className="bg-white-200 p-4 rounded-xl pb-10">
      <Text className="text-4xl font-semibold mb-7">Settings</Text>
      <Pressable 
      onPress={logOut}
      className="bg-red-600 py-3 rounded-xl mb-3">
        <Text className="text-white text-2xl text-center">Log out</Text>
      </Pressable>
      <Pressable
        onPress={closeSheet}
        className="bg-white border border-gray-400 py-3 rounded-xl"
      >
        <Text className="text-2xl text-center">Cancel</Text>
      </Pressable>
    </BottomSheetView>
  );
}
