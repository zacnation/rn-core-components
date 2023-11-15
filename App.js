import { View, Text, Image, ScrollView, Button, Pressable } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "teal", padding: 60 }}>
      <Button
        title="Click me"
        onPress={() => alert("Hello World")}
        color="orange"
      />
      <Pressable
        onPress={() => {
          alert("Pressed!");
        }}
      >
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </Pressable>
    </View>
  );
}
