import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import React from "react";
import HeaderButton from "./HeaderButton";
import { NotificationData } from "../utils/data";
const Notification = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        paddingTop: 30,
        backgroundColor: "#f6f8fa",
        flex: 1,
      }}
    >
      <View style={{ margin: 20 }}>
        <View style={styles.headerContainer}>
          <HeaderButton navigation={navigation} />
          <Text style={styles.headerText}>Notifications</Text>
        </View>
        <ScrollView>
          <View style={styles.notiTime}>
            <Text style={styles.today}>Today</Text>
            <Text style={styles.clear}>Clear all</Text>
          </View>
          <>
            {NotificationData.map((data, index) => (
              <View key={index} style={styles.notiCard}>
                <Image source={data.img} />
                <View>
                  <Text style={styles.dataHeader}>{data.header}</Text>
                  <Text style={styles.dataTime}>{data.time}</Text>
                </View>
              </View>
            ))}
          </>
          <View style={styles.notiTime}>
            <Text style={styles.today}>Yesterday</Text>
            <Text style={styles.clear}>Clear all</Text>
          </View>
          <>
            {NotificationData.map((data, index) => (
              <View key={index} style={styles.notiCard}>
                <Image source={data.img} />
                <View>
                  <Text style={styles.dataHeader}>{data.header}</Text>
                  <Text style={styles.dataTime}>{data.time}</Text>
                </View>
              </View>
            ))}
          </>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Notification;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    gap: 90,
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 10,
  },
  headerText: {
    fontWeight: "500",
    fontSize: 20,
  },
  notiTime: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },
  today: {
    fontWeight: "500",
    color: "#2b2b2b",
  },
  clear: {
    color: "#f44b4b",
    fontWeight: "400",
  },
  notiCard: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    gap: 10,
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 7,
    flexDirection: "row",
    alignItems: "center",
  },
  dataHeader: {
    textAlignVertical: "auto",
  },
  dataTime: {
    marginTop: 15,
    color: "#c2bcbc",
  },
});
