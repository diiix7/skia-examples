import { View, Text } from "react-native";
import HeaderStyle from "./Header.style.js";
const Header = (props) => {
  return (
    <View style={HeaderStyle.view}>
      <Text>Header</Text>
    </View>
  );
};
export default Header;
