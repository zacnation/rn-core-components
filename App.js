import { useState } from "react";

import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  Pressable,
  Modal,
} from "react-native";

const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{ flex: 1, backgroundColor: "teal", padding: 60 }}>
      <Button
        title="Click me"
        color="orange"
        onPress={() => setIsModalVisible(true)}
      />
      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
      >
        <View style={{ flex: 1, backgroundColor: "hotpink", padding: 60 }}>
          <Button
            title="Close"
            color="orange"
            onPress={() => setIsModalVisible(false)}
          />
        </View>
      </Modal>
    </View>
  );
}
