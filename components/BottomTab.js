import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";

const BottomTabs = () => {
  const Icon = (props) => {
    return (
      <TouchableOpacity>
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
      </TouchableOpacity>
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
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Browse" />
      <Icon icon="shopping-bag" text="Grocery" />

      <Icon icon="user" text="Account" />
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
