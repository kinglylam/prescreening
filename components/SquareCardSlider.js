import React, { useRef } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Dimensions,
  Animated,
  Text,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { FontAwesome } from "@expo/vector-icons";

const cardWidth = Dimensions.get("window").width - 80;
const cardData = [
  { id: "1", color: "#603fef" },
  { id: "2", color: "orange" },
  { id: "3", color: "blue" },
];

const Card = ({ color }) => {
  return (
    <View style={[styles.card, { backgroundColor: color }]}>
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "center",
          gap: 8,
          alignContent: "center",
          top: 100,
        }}
      >
        <View
          style={{
            height: 120,
            width: 70,
            backgroundColor: "#cbc3e3",
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            gap: 5,
          }}
        >
          <Text style={{ color: "#ffffff", fontWeight: "600", fontSize: 23 }}>
            29
          </Text>
          <Text style={{ color: "#ffffff" }}>Tue</Text>
          <Text style={{ color: "#ffffff" }}>2:00pm</Text>
        </View>
        <View
          style={{
            height: 120,
            gap: 10,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#ffffff", fontSize: 16 }}>
            Pending appointment
          </Text>
          <Text style={{ color: "#ffffff", fontWeight: "600", fontSize: 20 }}>
            Tanvir Ahmed
          </Text>
          <Text style={{ color: "#ffffff" }}>High Blood Sugar</Text>
        </View>
      </View>
      <View
        style={{
          top: 115,
          flexDirection: "row",
          justifyContent: "flex-end",
          alignItems: "center",
          marginRight: 20,
          gap: 15,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="" size={17} color={"white"} />
          <Text style={{ color: "white" }}>0:01:20</Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            width: 120,
            height: 30,
            borderRadius: 15,
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <Text style={{ color: color }}>View patient</Text>
          <FontAwesome color={color} size={20} name="arrow-right" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const Slider = () => {
  const flatListRef = useRef(null);
  const scrollX = useRef(new Animated.Value(0)).current;

  const handleSlide = (index) => {
    if (flatListRef.current) {
      flatListRef.current.scrollToIndex({ animated: true, index });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={cardData}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card color={item.color} />}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      />
      <View style={styles.sliderButtonContainer}>
        {cardData.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.sliderButton}
            onPress={() => handleSlide(index)}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f6f8fa",
  },
  card: {
    width: cardWidth,
    height: cardWidth,
    borderRadius: 10,
    margin: 20,
  },
  sliderButtonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    position: "absolute",
    width: "100%",
    bottom: 80,
  },
  sliderButton: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
});

export default Slider;
