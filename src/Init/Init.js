import { View, Text } from "react-native";
import InitStyle from "./Init.style.js";
import { Button } from "@rneui/themed";
import AnimatedCircle from "../AnimatedCircle/AnimatedCircle.js";
import { Route, Routes, useNavigate } from "react-router-native";

const Init = (props) => {
  const navigation = useNavigate();

  const handleAnimatedCircle = () => {
    navigation("/animatedcircle");
  };

  return (
    <View style={InitStyle.view}>
      <Text style={{ marginBottom: 20 }}>Skia</Text>
      <Button
        title={"Animated Circle"}
        buttonStyle={{
          paddingHorizontal: 10,
          height: 50,
          borderRadius: 10,
        }}
        color={"lightblue"}
        onPress={handleAnimatedCircle}
        //   disabled={}
      />
    </View>
  );
};
export default Init;
