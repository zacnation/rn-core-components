import { View, Text, Image, ScrollView, Button } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "teal", padding: 60 }}>
      <Button
        title="Click me"
        onPress={() => alert("Hello World")}
        color="orange"
      />
    </View>
  );
}
