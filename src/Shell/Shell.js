import { View, Text } from "react-native";
import ShellStyle from "./Shell.style.js";
import { Button } from "@rneui/themed";
import { Route, Routes, useLocation, useNavigate } from "react-router-native";
import AnimatedCircle from "../AnimatedCircle/AnimatedCircle.js";
import Init from "../Init/Init.js";
import Example from "../Example/Example.js";

const Shell = (props) => {
  return (
    <View style={ShellStyle.view}>
      <Routes>
        <Route exact path="/*" element={<Init />} />
        <Route path="/animatedcircle" element={<AnimatedCircle />} />
        <Route path="/example" element={<Example />} />
      </Routes>
    </View>
  );
};
export default Shell;
