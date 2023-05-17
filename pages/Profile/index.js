import { View } from "react-native";
import styles from "./Profile.module";
import Button from "../../components/Button";
import Typography from "../../components/Typography";

const Profile = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Typography type="p">Hello, </Typography>
      <Typography type="h2">{route.params.name} 👋</Typography>
      <Typography type="p">This is the Profile Screen</Typography>
      <Button color="success" title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export { Profile };
