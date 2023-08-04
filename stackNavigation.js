import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Register from "./screens/Register";
import SignIn from "./screens/SignIn";
import Account from "./screens/Account";
import RandomComponentScreen from "./screens/RandomComponentScreen";
import HomePage from "./screens/HomePage";
import Notification from "./components/Notification";
import TabNavigator from "./tabNavigation";

const StackNavigator = () => {
  const screenOptions = {
    headerShown: false,
  };
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Stack.Screen
        name="RandomComponentScreen"
        component={RandomComponentScreen}
      />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="HomePage" component={HomePage} />
      <Stack.Screen name="Account" component={Account} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
