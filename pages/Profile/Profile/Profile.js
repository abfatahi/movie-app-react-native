import { View } from "react-native";

import Typography from "../../../components/Typography";
import Button from "../../../components/Button";

import styles from "./Profile.module";

const Profile = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Typography type="p">Hello, </Typography>
      <Typography type="h2">Abdulfatahi 👋</Typography>
      <Typography type="p">This is the Profile Screen</Typography>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  );
};

export { Profile };
