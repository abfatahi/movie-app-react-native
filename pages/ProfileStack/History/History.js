import { View } from "react-native";

import Typography from "../../../components/Typography";

import styles from "./History.module";

const History = () => {
  return (
    <View style={styles.container}>
      <Typography type="h6">This is the History Screen</Typography>
      <Typography type="p">
        Below are list of movies you have watched over time
      </Typography>
    </View>
  );
};

export { History };
