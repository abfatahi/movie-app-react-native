import { useContext } from "react";
import { View } from "react-native";

import Typography from "../../../components/Typography";
import Button from "../../../components/Button";

import { UserContext } from "../../../context/UserContext";

import styles from "./Profile.module";

const Profile = ({ navigation }) => {
  const { name } = useContext(UserContext);
  return (
    <View style={styles.container}>
      <Typography type="p">
        Hello, <Typography type="h5">{name} 👋</Typography>{" "}
      </Typography>

      <Typography type="p">{'\n'}This is the Profile Screen{'\n'}</Typography>
      <Button
        title="My Watch List"
        onPress={() => navigation.navigate("History")}
      />
      <Button
        title="My Favorites"
        onPress={() => navigation.navigate("Favorites")}
      />
    </View>
  );
};

export { Profile };
