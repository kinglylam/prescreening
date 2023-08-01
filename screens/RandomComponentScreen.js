import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import Onboarding6 from "../components/Onboarding6";
import Onboarding7 from "../components/Onboarding7";
import Onboarding8 from "../components/Onboarding8";
import Onboarding10 from "../components/Onboarding10";

const componetArray = [Onboarding6, Onboarding7, Onboarding8, Onboarding10];

const RandomComponentScreen = ({ navigation }) => {
  const [ComponentToRender, setcomponetToRender] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * componetArray.length);
    const RandomComponent = componetArray[randomIndex];
    setcomponetToRender(<RandomComponent navigation={navigation} />);
  }, [navigation]);

  return (
    <View>
      <View>{ComponentToRender}</View>
    </View>
  );
};

export default RandomComponentScreen;

const styles = StyleSheet.create({});
