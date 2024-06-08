// import { View, Text, Image } from "react-native";
// import ExampleStyle from "./Example.style.js";
// import Header from "../Components/Header/Header.js";
// import { useEffect, useState } from "react";
// import { Canvas, useCanvasRef, Circle } from "@shopify/react-native-skia";
// import { Buffer } from "buffer";

// const Example = (props) => {
//   const [imageUri, setImageUri] = useState(null);
//   const ref = useCanvasRef();

//   useEffect(() => {
//     setTimeout(() => {
//       const image = ref.current?.makeImageSnapshot();
//       if (image) {
//         const bytes = image.encodeToBytes();
//         const base64String = `data:image/png;base64,${Buffer.from(
//           bytes
//         ).toString("base64")}`;
//         setImageUri(base64String);
//       }
//     }, 1000);
//   }, [ref]);

//   return (
//     <View style={ExampleStyle.view}>
//       <Header title={"Example"} backTo={"/"} />
//       <Canvas style={{ flex: 1 }} ref={ref}>
//         <Circle r={50} cx={50} cy={50} color="red" />
//       </Canvas>
//       {imageUri && (
//         <Image source={{ uri: imageUri }} style={ExampleStyle.image} />
//       )}
//     </View>
//   );
// };
// export default Example;

import React from "react";
import {
  Canvas,
  ColorMatrix,
  Fill,
  useImage,
  ImageShader,
} from "@shopify/react-native-skia";
import {
  Pressable,
  useWindowDimensions,
  View,
  SafeAreaView,
} from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Header from "../Components/Header/Header.js";

export const Example = () => {
  const paused = useSharedValue(false);
  const { width, height } = useWindowDimensions();
  const image = useImage(require("../../assets/moi.jpeg"));

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={"Example"} backTo={"/"} />

      <Pressable
        style={{ flex: 1 }}
        onPress={() => (paused.value = !paused.value)}
      >
        <Canvas style={{ flex: 1 }}>
          {image && (
            <Fill>
              <ImageShader
                image={image}
                x={0}
                y={0}
                width={width}
                height={height}
                fit="cover"
              />
              <ColorMatrix
                matrix={[
                  0.95, 0, 0, 0, 0.05, 0.65, 0, 0, 0, 0.15, 0.15, 0, 0, 0, 0.5,
                  0, 0, 0, 1, 0,
                ]}
              />
            </Fill>
          )}
        </Canvas>
      </Pressable>
    </SafeAreaView>
  );
};

export default Example;
