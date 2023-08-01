import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import profilePic from "../assets/profilePic.jpg";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/BottomTab";

const Account = () => {
  const Icon = ({ name, color }) => (
    <Ionicons name={name} color={color} style={styles.icon} />
  );

  const AccountContent = ({ iconColor, iconName, contentText }) => (
    <TouchableOpacity style={styles.accountContent}>
      <Icon name={iconName} color={iconColor} />
      <Text>{contentText}</Text>
    </TouchableOpacity>
  );

  const VerticalLine = () => {
    return <View style={styles.verticalLine} />;
  };
  return (
    <SafeAreaView
      style={{
        backgroundColor: "#f6f8fa",
        flex: 1,
      }}
    >
      <View style={{ margin: 20, flex: 1 }}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>My Account</Text>
          <View style={styles.headerIcon}>
            <TouchableOpacity>
              <Icon name="notifications" size={40} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <Image source={profilePic} style={styles.profileImage} />
        <Text style={styles.name}>Dr.Mahmodul Hasan</Text>

        <View style={styles.practitioner}>
          <Text style={styles.practitionerText}>General Practitioner</Text>
        </View>
        <View style={styles.secondLine}>
          <View style={styles.verified}>
            <Icon name="ios-checkmark-circle" size={32} color="green" />
            <Text style={styles.verifiedText}>verified</Text>
          </View>
          <VerticalLine />
          <View style={styles.id}>
            <Text style={styles.idText}>ID: APTOO45</Text>
          </View>
        </View>
        <ScrollView snapToAlignment="center">
          <>
            <View style={{ flexDirection: "row" }}>
              <AccountContent
                iconName="wallet"
                iconColor="black"
                contentText="Wallet"
              />
              <Text>$3000</Text>
            </View>
            <AccountContent
              iconName="lock-closed"
              iconColor="black"
              contentText="Verification"
            />
            <AccountContent
              iconName="person"
              iconColor="black"
              contentText="Profile"
            />
            <AccountContent
              iconName="lock-closed"
              iconColor="black"
              contentText="Saved location"
            />
            <AccountContent
              iconName="notifications"
              iconColor="black"
              contentText="Support & help center"
            />
            <AccountContent
              iconName="notifications"
              iconColor="black"
              contentText="Security"
            />
            <AccountContent
              iconName="notifications"
              iconColor="black"
              contentText="Check our FAQ's"
            />
            <AccountContent
              iconName="settings"
              iconColor="black"
              contentText="Settings"
            />
          </>
          <View>
            <TouchableOpacity
              style={{
                alignItems: "center",
                justifyContent: "center",
                padding: 30,
              }}
            >
              <Text style={{ color: "red" }}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
      <Divider width={0.1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Account;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between",
  },
  headerText: {
    textAlign: "center",
    fontWeight: "500",
    marginLeft: 140,
    fontSize: 17,
  },
  headerIcon: {
    justifyContent: "flex-end",
    paddingRight: 10,
  },
  profileImage: {
    width: 65,
    height: 65,

    alignSelf: "center",
  },
  name: {
    textAlign: "center",
    paddingTop: 5,
    fontWeight: "400",
    color: "#2b2b2b",
  },
  verticalLine: {
    width: 1,
    height: "90%",
    backgroundColor: "#222222",
  },
  practitioner: {
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
    backgroundColor: "#ffd1dc",
    width: 170,
    height: 30,
    borderRadius: 10,

    alignSelf: "center",
  },
  secondLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 25,
  },
  practitionerText: {
    color: "#ff007f",
  },
  verified: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    height: 30,
    backgroundColor: "#d9ffe3",
    gap: 3,
  },
  id: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: 130,
    height: 30,
    backgroundColor: "#ded9ff",
  },
  idText: {
    color: "#4425f5",
  },
  verifiedText: {
    color: "#008a5e",
  },
  accountContent: {
    width: "100%",
    height: 55,
    alignItems: "center",
    gap: 15,
    paddingLeft: 5,
    flexDirection: "row",
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
});
