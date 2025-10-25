import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import SearchComp from "./src/components/SearchComp";
import MoviesSlider from "./src/components/MoviesSlider";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
        <SearchComp />
        <MoviesSlider />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf2f5",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 24,
  },
});
