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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 24
  },
});
