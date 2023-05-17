import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    paddingVertical: 12,
  },

  // Button Sizes
  small: {
    paddingHorizontal: 8,
  },
  medium: {
    paddingHorizontal: 12,
  },
  large: {
    paddingHorizontal: 16,
  },

  // Button Skins
  flat: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
  },
  solid: {
    borderWidth: 0,
  },

  // Button Variants
  primary: {
    backgroundColor: "#007bff",
  },
  success: {
    backgroundColor: "green",
  },
  secondary: {
    backgroundColor: "#6c757d",
  },
  info: {
    backgroundColor: "#17a2b8",
  },
  danger: {
    backgroundColor: "#dc3545",
  },
  warning: {
    backgroundColor: "#ffc107",
  },
  dark: {
    backgroundColor: "#343a40",
  },
  light: {
    backgroundColor: "#f8f9fa",
  },

  // Others
  icon: {
    marginRight: 8,
    color: "#ffffff",
  },
  spinner: {
    marginRight: 8,
  },
  title: {
    color: "#ffffff",
    fontWeight: "bold",
  },
});
