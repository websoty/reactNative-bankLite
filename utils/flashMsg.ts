import { showMessage } from "react-native-flash-message";

export const flashSuccess = (message: string) => {
  showMessage({
    message,
    type: "success",
    icon: "success",
    duration: 2000,
  });
};

export const flashError = (message: string) => {
  showMessage({
    message,
    type: "danger",
    icon: "danger",
    duration: 2500,
  });
};

export const flashInfo = (message: string) => {
  showMessage({
    message,
    type: "info",
    icon: "info",
  });
}
