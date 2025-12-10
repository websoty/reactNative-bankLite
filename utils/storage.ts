import AsyncStorage from "@react-native-async-storage/async-storage";

const DATA_KEY = "finance";

export async function saveData(data: any) {
  try {
    await AsyncStorage.setItem(DATA_KEY, JSON.stringify(data));
  } catch (err) {
    console.warn("Failed to save finance", err);
  }
}

export async function loadData() {
  try {
    const json = await AsyncStorage.getItem(DATA_KEY);
    return json ? JSON.parse(json) : null;
  } catch (err) {
    console.warn("Failed to load finance", err);
    return null;
  }
}

export async function removeData() {
  await AsyncStorage.removeItem(DATA_KEY);
}