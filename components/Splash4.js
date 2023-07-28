import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React from "react";
import Logo from "../assets/logo.png";

const Splash4 = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={Logo} />
      <Text style={styles.text1}>Hospyta</Text>
      <Text style={styles.text2}>DOCTORS</Text>
      <Text style={{ marginTop: 15, fontSize: 17 }}>Consult...</Text>
    </SafeAreaView>
  );
};

export default Splash4;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text1: {
    color: "#000000",
    fontWeight: "700",
    fontSize: 37,
  },
  text2: {
    left: 37,
  },
});
