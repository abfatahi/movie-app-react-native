import { View } from "react-native";

import Typography from "../../../components/Typography";

import styles from "./Settings.module";
import Button from "../../../components/Button";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Typography type="p">This is the Settings Screen</Typography>
      <Button
        title="Security Setting"
        onPress={() => navigation.navigate("Security")}
      />
      <Button
        title="Subscription Setting"
        onPress={() => navigation.navigate("Subscription")}
      />
    </View>
  );
};

export { Settings };
