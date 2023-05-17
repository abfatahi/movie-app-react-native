import { FlatList, SafeAreaView, View } from "react-native";

import Button from "../../components/Button";
import Typography from "../../components/Typography";
import MovieCard from "../../components/MovieCard";

import { movies } from "../../store/mockData";
import { homePageContent } from "../../store/content";

import styles from "./Home.module";

const Home = ({ navigation }) => {
  const { headingText, buttonText, subHeadingText } = homePageContent;

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
      <View style={styles.heading}>
        <Typography type="h4">{headingText} </Typography>
        <Button
          title={buttonText}
          onPress={() =>
            navigation.navigate("Profile", { name: "Abdulfatahi Ishaq" })
          }
        />
      </View>

      <Typography type="p">
        {"\n"}
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
