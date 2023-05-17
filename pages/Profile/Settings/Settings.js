import { View } from "react-native";

import Typography from "../../../components/Typography";
import Button from "../../../components/Button";

import styles from "./Settings.module";

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Typography type="p">Hello, </Typography>
      <Typography type="h2">Abdulfatahi 👋</Typography>
      <Typography type="p">This is the Settings Screen</Typography>
      <Button title="Go to Profile" onPress={() => navigation.navigate("Profile")} />
    </View>
  );
};

export { Settings };
