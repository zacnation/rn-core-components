import { View, Text, Image, ScrollView } from "react-native";
const logoImg = require("./assets/adaptive-icon.png");

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "teal", padding: 60 }}>
      <ScrollView>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
        <Text style={{ color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget enim
          id ante gravida placerat sed vitae justo. Vivamus semper orci ac
          ullamcorper ultricies. Praesent mauris erat, placerat sit amet
          pellentesque in, semper ac tellus. Sed eget lacus tellus. Curabitur
          est arcu, consectetur eu ipsum vitae, fringilla sagittis nibh. Vivamus
          nunc libero, venenatis et risus a, sodales varius lacus. In facilisis
          orci nisl, et varius nunc imperdiet id. Aliquam risus massa, consequat
          sit amet fermentum at, dignissim vitae orci. Duis rutrum mattis
          interdum. Ut eu ligula arcu. Vivamus sit amet vestibulum erat.
          Phasellus vitae leo tellus. Praesent pharetra, orci id mollis pretium,
          orci mauris facilisis risus, cursus pellentesque orci nibh id velit.
          Phasellus pretium mi ac porttitor dapibus. Integer convallis erat
          vitae vulputate lobortis. Interdum et malesuada fames ac ante ipsum
          primis in faucibus. Donec felis ante, accumsan a interdum eu, semper
          ut nisl. Phasellus imperdiet massa nec neque porttitor viverra. Donec
          ac sem laoreet, pharetra tortor suscipit, molestie diam. Nunc nec
          dapibus nisi, eget dignissim tortor. Aenean semper metus et risus
          condimentum pellentesque. Maecenas sem erat, faucibus ac auctor
          molestie, fermentum vel turpis. Fusce leo justo, dignissim eu
          ullamcorper fermentum, egestas nec turpis. Fusce malesuada, massa eget
          pharetra iaculis, nisl eros commodo augue, sit amet mollis justo orci
          at nibh. Nulla congue metus quis egestas tincidunt. Nulla molestie nec
          ante ut condimentum. Nulla facilisis, dui at rutrum lacinia, justo
          odio pharetra ligula, sed sagittis tellus tellus at ligula.
          Suspendisse nec rhoncus orci, eget rutrum massa. Suspendisse eu
          porttitor risus. Praesent finibus leo mollis tortor hendrerit
          pulvinar. Ut nisi quam, rhoncus eget ipsum a, mollis egestas diam.
        </Text>
        <Image source={logoImg} style={{ width: 300, height: 300 }} />
      </ScrollView>
    </View>
  );
}
