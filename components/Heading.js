import React from "react";
import { Text, StyleSheet } from "react-native";

const Heading = ({ level, children }) => {
  let HeadingComponent;
  switch (level) {
    case 1:
      HeadingComponent = Text;
      break;
    case 2:
      HeadingComponent = Text;
      break;
    // Add more cases for other heading levels as needed

    default:
      HeadingComponent = Text;
      break;
  }

  return <HeadingComponent style={styles.heading}>{children}</HeadingComponent>;
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    // Add more styles as needed
  },
});

export default Heading;
