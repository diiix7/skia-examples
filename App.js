import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native";
import { NativeRouter } from "react-router-native";
import Shell from "./src/Shell/Shell";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <NativeRouter>
        <Shell />
      </NativeRouter>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
