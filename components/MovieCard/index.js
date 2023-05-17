import Typography from "../Typography";
import { Image, View } from "react-native";

import styles from "./Movie.module";

const MovieCard = ({ id, title, year, uri }) => {
  return (
    <View id={id} style={styles.container}>
      <Image source={{ uri }} style={styles.image} />
      <Typography type="p">
        {title}, {year}
      </Typography>
    </View>
  );
};

export default MovieCard;
