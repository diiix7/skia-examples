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
  const circleX = useSharedValue(130);

  useEffect(() => {
    circleX.value = withRepeat(withTiming(250, { duration: 1000 }), -1, true);
  }, [circleX]);

  return (
    <SafeAreaView style={AnimatedCircleStyle.view}>
      <Header title={"Animated Circle"} backTo={"/"} />
      <View>
        <Canvas style={AnimatedCircleStyle.canvas}>
          <Circle cx={circleX} cy={100} r={50} color="tomato" />
        </Canvas>
      </View>
    </SafeAreaView>
  );
};

export default AnimatedCircle;
