import { View } from "react-native";

import Typography from "../../../components/Typography";

import styles from "./Favorites.module";

const Favorites = () => {
  return (
    <View style={styles.container}>
      <Typography type="h6">This is the Favorites Screen</Typography>
      <Typography type="p">Below are your favorites movies</Typography>
    </View>
  );
};

export { Favorites };
