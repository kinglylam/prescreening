import { StyleSheet, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const HeaderButton = () => {
  return (
    <View>
      <TouchableOpacity style={styles.container}>
        <FontAwesome name={"arrow-left"} color={"#2b2b2b"} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderButton;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 35,
    height: 35,
  },
});
