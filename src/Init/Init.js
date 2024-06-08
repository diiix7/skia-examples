import { View, Text } from "react-native";
import InitStyle from "./Init.style.js";
import { Button } from "@rneui/themed";
import AnimatedCircle from "../AnimatedCircle/AnimatedCircle.js";
import { useNavigate } from "react-router-native";

const Init = (props) => {
  const navigation = useNavigate();

  const handleAnimatedCircle = () => {
    navigation("/animatedcircle");
  };

  const handleExample = () => {
    navigation("/example");
  };

  return (
    <View style={InitStyle.view}>
      <View>
        <Text style={{ marginBottom: 20 }}>Skia</Text>
        <Button
          title={"Animated Circle"}
          buttonStyle={{
            paddingHorizontal: 10,
            height: 50,
            borderRadius: 10,
          }}
          color={"green"}
          onPress={handleAnimatedCircle}
          //   disabled={}
        />
      </View>
      <View>
        <Text style={{ marginTop: 20, marginBottom: 20 }}>Example</Text>
        <Button
          title={"Example"}
          buttonStyle={{
            paddingHorizontal: 40,
            height: 50,
            borderRadius: 10,
          }}
          color={"green"}
          onPress={handleExample}
          //   disabled={}
        />
      </View>
    </View>
  );
};
export default Init;
