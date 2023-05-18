import { View } from "react-native";

import Typography from "../../../components/Typography";

import styles from "./Subscription.module";

const Subscription = () => {
  return (
    <View style={styles.container}>
      <Typography type="p">This is the Subscription Settings Screen</Typography>
    </View>
  );
};

export { Subscription };
