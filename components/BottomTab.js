import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const BottomTabs = ({ navigation }) => {
  const Icon = (props) => {
    return (
      <View>
        <FontAwesome5
          name={props.icon}
          size={25}
          style={{
            marginBottom: 3,
            alignSelf: "center",
          }}
        />
      </View>
    );
  };

  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: 30,
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 10,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("HomePage")}>
        <Icon icon="home" text="Home" />
      </TouchableOpacity>
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />

      <TouchableOpacity onPress={() => navigation.navigate("Account")}>
        <Icon icon="user" text="Account" />
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
