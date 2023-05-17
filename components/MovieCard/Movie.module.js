import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("screen");

export default StyleSheet.create({
  container: {
    height: 200,
    width: width / 2,
    marginBottom: 8,
  },
  image: {
    width: "90%",
    height: "80%",
    resizeMode: "stretch",
  },
});
