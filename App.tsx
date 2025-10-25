import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchComp from "./src/components/SearchComp";

export default function App() {
  return (
    <SafeAreaView edges={["top", "bottom"]} style={styles.container}>
      <SearchComp />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#edf2f5",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 24
  },
});
