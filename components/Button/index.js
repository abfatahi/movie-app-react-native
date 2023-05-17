import React from "react";
import { TouchableOpacity, Text, ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import styles from "./Button.module";

// const { width } = Dimensions.get("screen");

const Button = ({
  size = "medium",
  skin = "solid",
  color = "primary",
  icon,
  loading,
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, styles[size], styles[skin], styles[color]]}
      onPress={onPress}
      disabled={loading}
    >
      {icon && !loading && (
        <Ionicons name={icon} size={24} style={styles.icon} />
      )}
      {loading && (
        <ActivityIndicator
          color="#ffffff"
          size="small"
          style={styles.spinner}
        />
      )}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
