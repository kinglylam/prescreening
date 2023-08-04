import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import profilePic from "../assets/doc.jpg";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/BottomTab";
import Slider from "../components/SquareCardSlider";
import { ScrollView } from "react-native";

const HomePage = ({ navigation }) => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled((prevState) => !prevState);
  };

  const Icon = ({ name, color }) => (
    <Ionicons name={name} color={color} style={styles.icon} size={30} />
  );
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f6f8fa",
        flex: 1,
      }}
    >
      <View style={{ margin: 20, flex: 1 }}>
        <View style={styles.headerContainer}>
          <View style={styles.headerLeft}>
            <Image source={profilePic} />
            <View>
              <Text style={styles.headerTitle}>Welcome Dr,</Text>
              <Text style={styles.headerSubTitle}>
                What do you want to {"\n"}do today?
              </Text>
            </View>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => navigation.navigate("Notification")}
            >
              <Icon name="notifications" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => navigation.openDrawer()}
            >
              <Icon name="menu" />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={{ height: 500 }}>
            <Slider />
          </View>
          <View style={{ alignItems: "center" }}>
            <View style={styles.available}>
              <Text style={styles.toggleText}>I am Available</Text>
              <TouchableOpacity onPress={handleToggle}>
                <FontAwesome
                  name={isToggled ? "toggle-on" : "toggle-off"}
                  color={isToggled ? "green" : "red"}
                  size={29}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <TouchableOpacity style={styles.calender}>
              <FontAwesome name="calendar" color={"black"} size={26} />
              <Text style={styles.calenderText}>
                Schedule appointment calender
              </Text>
              <FontAwesome name="arrow-right" size={20} color={"black"} />
            </TouchableOpacity>
          </View>
          <View style={styles.community}>
            <View style={styles.communityText}>
              <Text style={styles.communityTextLeft}>Community Feed</Text>
              <TouchableOpacity>
                <Text style={styles.communityTextRight}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.community}>
            <View style={styles.communityText}>
              <Text style={styles.communityTextLeft}>
                Shop For Medical Devices
              </Text>
              <TouchableOpacity>
                <Text style={styles.communityTextRight}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.community}>
            <View style={styles.communityText}>
              <Text style={styles.communityTextLeft}>Shop For Medicines</Text>
              <TouchableOpacity>
                <Text style={styles.communityTextRight}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.community}>
            <View style={styles.communityText}>
              <Text style={styles.communityTextLeft}>News Feed</Text>
              <TouchableOpacity>
                <Text style={styles.communityTextRight}>View all</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
      <Divider width={0.1} />
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  headerLeft: {
    flexDirection: "row",
    gap: 15,
  },
  headerTitle: {
    color: "#2b2b2b",
    fontWeight: "600",
    fontSize: 18,
  },
  headerSubTitle: {
    fontWeight: "400",
    color: "#2b2b2b",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  iconContainer: {
    width: 55,
    height: 55,
    borderRadius: "50%",
    borderWidth: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },
  available: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    height: 45,
    paddingVertical: 10,

    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#99edc3",
  },
  toggleText: {
    color: "green",
    fontWeight: "500",
  },
  calender: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    height: 45,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: "#979797",
    marginVertical: 20,
  },
  calenderText: {
    color: "black",
    fontWeight: "500",
  },
  community: {
    marginVertical: 15,
    marginTop: 50,
  },
  communityText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  communityTextLeft: {
    color: "#424242",
    fontWeight: "600",
    fontSize: 20,
  },
  communityTextRight: {
    color: "#6798e1",
    fontWeight: "400",
    fontSize: 16,
  },
});
