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
} from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  const [count, setCount] = useState(0);
  return (
    <View style={{ flex: 1, backgroundColor: "teal", padding: 60 }}>
      <ActivityIndicator
        size="large"
        style={{ paddingTop: 100, paddingBottom: 20 }}
        animating={isLoadingVisible}
      />
      <Button
        title="Toggle Loading Icon"
        color="orange"
        onPress={() => setIsLoadingVisible(!isLoadingVisible)}
      />
      <Button title="Add" color="hotpink" onPress={() => setCount(count + 1)} />
      <Button
        title="Subtract"
        color="hotpink"
        onPress={() => setCount(count - 1)}
      />
      <Text style={{ fontSize: 30 }}>{count}</Text>
    </View>
  );
}
