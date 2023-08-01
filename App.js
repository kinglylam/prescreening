import React, { useState } from "react";
import { View, Text } from "react-native";

import Splash3 from "./components/Splash3";

import RootNavigation from "./navigation";
import Slider from "./components/SquareCardSlider";
import { GestureHandlerRootView } from "react-native-gesture-handler";
export default function App() {
  const [appReady, setAppReady] = useState(false);
  setTimeout(() => {
    setAppReady(true);
  }, 2000);
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
        }}
      >
        {appReady ? (
          <>
            <RootNavigation />
          </>
        ) : (
          <>
            <Splash3 />
          </>
        )}
      </View>
    </GestureHandlerRootView>
  );
}
