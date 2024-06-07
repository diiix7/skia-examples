import AnimatedCircleStyle from "./AnimatedCircle.style.js";
import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { Canvas, Circle, Skia } from "@shopify/react-native-skia";
import {
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";
import { useEffect } from "react";
import Header from "../Components/Header/Header.js";

const AnimatedCircle = () => {
  const circleX = useSharedValue(50);

  useEffect(() => {
    circleX.value = withRepeat(withTiming(250, { duration: 1000 }), -1, true);
  }, [circleX]);

  return (
    <View>
      <Header />
      <Canvas style={AnimatedCircleStyle.canvas}>
        <Circle cx={circleX} cy={100} r={50} color="blue" />
      </Canvas>
    </View>
  );
};

export default AnimatedCircle;
