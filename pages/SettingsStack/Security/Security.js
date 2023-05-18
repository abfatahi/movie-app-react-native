import { View } from "react-native";

import Typography from "../../../components/Typography";

import styles from "./Security.module";

const Security = () => {
  return (
    <View style={styles.container}>
      <Typography type="p">This is the Account Security Settings Screen</Typography>
    </View>
  );
};

export { Security };
