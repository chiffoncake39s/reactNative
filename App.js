import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {WebView} from "react-native-webview";

const youtube = "https://www.youtube.com/";
const google = "https://www.google.com/";
const chiffon = "http://chiffoncakes.starfree.jp/Vocaloids/vocalo.html";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{width:"100%", height:"100%"}}>
        <WebView
          source = {{uri: chiffon}}
          onLoad={console.log("loaded")}
        />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    backgroundColor: '#222',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
