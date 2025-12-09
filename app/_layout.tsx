import { store } from "@/store";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import FlashMessage from "react-native-flash-message";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import "../global.css";

export default function RootLayout() {
  return (
    <>
    <Provider store={store}>
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </GestureHandlerRootView>
    </Provider>

    <FlashMessage position="top" />
    </>
  );
}
