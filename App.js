import { useState } from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  Pressable,
  Modal,
  StatusBar,
  ActivityIndicator,
  Alert,
} from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  const [count, setCount] = useState(0);
  return (
    <View style={{ flex: 1, backgroundColor: "teal", padding: 60 }}>
      <Button
        title="Alert"
        onPress={() =>
          Alert.alert("Error", "Please try again", [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed") },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ])
        }
        color="orange"
      />
    </View>
  );
}
