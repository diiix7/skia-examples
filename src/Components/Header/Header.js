import { View, Text, Pressable } from "react-native";
import HeaderStyle from "./Header.style.js";
import { AntDesign } from "@expo/vector-icons";
import { useNavigate } from "react-router-native";

const Header = (props) => {
  const navigation = useNavigate();

  const title = props?.title;

  const backTo = props?.backTo;

  return (
    <View style={HeaderStyle.view}>
      <Pressable
        onPress={() => navigation(backTo)}
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", marginRight: 210, marginTop: 10 }}>
          <AntDesign name="left" size={20} color={"black"} />
          <Text style={{ marginLeft: 5, fontSize: 16 }}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
};
export default Header;
