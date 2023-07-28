import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";
import React from "react";
import Logo from "../assets/logo.png";

const Splash3 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Logo} />
    </SafeAreaView>
  );
};

export default Splash3;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});
