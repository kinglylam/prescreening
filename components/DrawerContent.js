import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import profilePic from "../assets/doc.jpg";

const DrawerContent = ({ navigation }) => {
  return (
    <View>
      <View style={styles.upperContainer}>
        <View style={{ marginTop: 15, alignItems: "flex-end" }}>
          <TouchableOpacity onPress={() => navigation.closeDrawer()}>
            <FontAwesome name="times" color="black" size={23} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerLeft}>
          <Image source={profilePic} style={styles.img} />
          <View>
            <Text style={styles.headerTitle}>Welcome Dr,</Text>
            <Text style={styles.headerSubTitle}>
              What do you want to do today?
            </Text>
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  upperContainer: {
    height: 150,
    backgroundColor: "#4425f5",
    padding: 20,
  },
  headerLeft: {
    flexDirection: "row",
    gap: 15,
    justifyContent: "space-around",
    alignItems: "center",
    paddingVertical: 10,
  },
  headerTitle: {
    color: "white",
    fontWeight: "500",
    fontSize: 15,
  },
  headerSubTitle: {
    fontWeight: "400",
    color: "white",
    fontSize: 12,
  },
  img: { borderRadius: "50%" },
});
