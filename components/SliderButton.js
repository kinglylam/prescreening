import React, { useRef } from "react";
import { View, FlatList, StyleSheet, Dimensions, Animated } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const cardsData = [
  { id: "1", color: "red" },
  { id: "2", color: "green" },
  { id: "3", color: "blue" },
];

const SliderButton = ({ scrollX, screenWidth, onSlide }) => {
  const translateX = scrollX.interpolate({
    inputRange: [0, screenWidth * 2],
    outputRange: [0, screenWidth - 50], // Adjust the end value based on the size of your slider button
    extrapolate: "clamp",
  });

  return (
    <Animated.View
      style={[styles.sliderButton, { transform: [{ translateX }] }]}
    >
      {cardsData.map((item, index) => (
        <TouchableOpacity
          key={item.id}
          style={styles.sliderButtonDot}
          onPress={() => onSlide(index)}
        />
      ))}
    </Animated.View>
  );
};

export default SliderButton;
const styles = StyleSheet.create({
  sliderButton: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    bottom: 20,
    width: "100%",
  },
  sliderButtonDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});
