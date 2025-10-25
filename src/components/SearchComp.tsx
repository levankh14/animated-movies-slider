import { StyleSheet, TextInput, View } from "react-native";
import React from "react";

import { Search } from "lucide-react-native";

type Props = {};

const SearchComp = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchCont}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={"#464343ff"}
          style={styles.input}
        />
        <Search size={20} color={"#3757fa"} />
      </View>
    </View>
  );
};

export default SearchComp;

const styles = StyleSheet.create({
  container: { width: "100%", paddingHorizontal: 16 },
  searchCont: {
    width: "100%",
    borderRadius: 8,
    backgroundColor: "white",
    elevation: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
});
