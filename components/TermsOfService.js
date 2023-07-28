import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import React, { useState } from "react";
import HeaderButton from "./HeaderButton";
import { MaterialIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const TermsOfService = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxPress = () => {
    setIsChecked(!isChecked);
  };
  return (
    <SafeAreaView style={{ margin: 20, paddingTop: 30 }}>
      <View style={styles.headerContainer}>
        <HeaderButton />
        <Text style={styles.headerText}>Terms of service</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>
          To continue, please accept our terms of service
        </Text>
        <View style={styles.text}>
          <Text style={styles.subTitle}>
            Sample: If you're not old enough to manage {"\n"}your own Google
            Account, you need {"\n"}permission from your parent or legal
            guardian {"\n"}to use one. We ask that your parent or legal {"\n"}
            guardian read these terms with you.
          </Text>
          <Text style={styles.subTitle}>
            If you're a parent or legal guardian and you {"\n"}give permission
            for your child to use {"\n"}our services, then these terms apply to
            you. You're {"\n"}responsible for your child's activity on our{" "}
            {"\n"}
            services.
          </Text>
          <Text style={styles.subTitle}>
            Please note that some Google services may {"\n"}have additional age
            requirements outlined in {"\n"}their service-specific additional
            terms and{"\n"}policies.
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 25 }}>
        <TouchableOpacity
          style={styles.checkboxContainer}
          onPress={handleCheckboxPress}
        >
          {isChecked ? (
            <MaterialIcons name="check-box" size={30} color="blue" />
          ) : (
            <MaterialIcons
              name="check-box-outline-blank"
              size={30}
              color="blue"
            />
          )}
          <Text style={styles.checkboxLabel}>
            I agree with all terms of service
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Agree</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TermsOfService;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    gap: 90,
    alignItems: "center",
    paddingTop: 20,
  },
  headerText: {
    fontWeight: "500",
    fontSize: 20,
  },
  content: {
    marginTop: 55,
    alignItems: "center",
    gap: 10,
  },
  title: {
    fontWeight: "700",
    fontSize: 20,
  },
  text: {
    gap: 5,
  },
  subTitle: {
    fontWeight: "400",
    fontSize: 16,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 18,
  },
  button: {
    backgroundColor: "#4425f5",
    width: "100%",
    height: 48,
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 180,
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
  },
});
