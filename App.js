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
} from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isStatusBarHidden, setIsStatusBarHidden] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "teal", padding: 60 }}>
      <StatusBar barStyle="light-content" hidden={isStatusBarHidden} />
      <Button
        title="Toggle Status Bar"
        color="orange"
        onPress={() => setIsStatusBarHidden(!isStatusBarHidden)}
      />
    </View>
  );
}
