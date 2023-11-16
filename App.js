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

import Greet from "./components/Greet";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isLoadingVisible, setIsLoadingVisible] = useState(true);
  const [count, setCount] = useState(0);
  return (
    <View style={{ flex: 1, backgroundColor: "teal", padding: 60 }}>
      <Greet name="Zac" />
    </View>
  );
}
