import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Account from "./screens/Account";
import HomePage from "./screens/HomePage";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomePage" component={HomePage} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
