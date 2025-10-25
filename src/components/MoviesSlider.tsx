import { Dimensions, FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import data from "../data/images";
import Movie from "./Movie";
import Animated, {
  FadeIn,
  FadeInUp,
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";

type Props = {};

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.75 + 10;
const MoviesSlider = (props: Props) => {
  const currentIndex = useSharedValue(0);

  const handleScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      currentIndex.value = event.contentOffset.x / ITEM_WIDTH;
      console.log(event.contentOffset.x / ITEM_WIDTH);
    },
  });
  return (
    <View style={styles.container}>
      <Animated.Text
        entering={FadeInUp.springify()}
        style={{
          fontSize: 24,
          fontWeight: "600",
          paddingHorizontal: 16,
          marginTop: 24,
        }}
      >
        Top Searches
      </Animated.Text>
      <Animated.FlatList
        onScroll={handleScroll}
        entering={FadeInUp.delay(200).springify()}
        data={data}
        renderItem={({ item, index }) => (
          <Movie
            currentIndex={currentIndex}
            key={index}
            item={item}
            index={index}
          />
        )}
        contentContainerStyle={{
          height: "100%",
          paddingLeft: 16,
          gap: 10,
          paddingRight: width - ITEM_WIDTH,
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={ITEM_WIDTH}
        decelerationRate="fast"
      />
    </View>
  );
};

export default MoviesSlider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
    gap: 10,
  },
});
