import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./drawerNavigation";

export default function RootNavigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
