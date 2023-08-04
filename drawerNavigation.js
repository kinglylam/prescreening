import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import StackNavigator from "./stackNavigation";
import DrawerContent from "./components/DrawerContent";

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      drawerPosition="right"
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Drawer.Screen name="Stack" component={StackNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
