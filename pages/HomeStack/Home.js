import { FlatList, SafeAreaView, View } from "react-native";

import Typography from "../../components/Typography";
import MovieCard from "../../components/MovieCard";

import { movies } from "../../store/mockData";
import { homePageContent } from "../../store/content";

import styles from "./Home.module";

const Home = () => {
  const { headingText, subHeadingText } = homePageContent;

  const renderMovieCards = ({ item }) => (
    <MovieCard
      id={item.id}
      title={item.title}
      year={item.year}
      uri={item.uri}
    />
  );
  return (
    <View style={styles.container}>
      <Typography type="h4">{headingText} </Typography>

      <Typography type="p" style={styles.subHeading}>
        {subHeadingText}
      </Typography>

      <SafeAreaView>
        <FlatList
          data={movies}
          renderItem={renderMovieCards}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.grid}
        />
      </SafeAreaView>
    </View>
  );
};

export { Home };
