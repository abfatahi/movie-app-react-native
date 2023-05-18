import { Text } from "react-native";

import styles from "./Typography.module";

const Typography = ({ type = "p", style = {}, children, ...props }) => {
  const textStyle = styles[type];

  return (
    <Text {...props} style={[textStyle, style]}>
      {children}
    </Text>
  );
};

export default Typography;
