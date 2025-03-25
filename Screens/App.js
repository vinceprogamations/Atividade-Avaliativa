import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Test from './components/Home';
import Logi from './components/Login';
export default function App() {
  return (
    <View style={styles.container}>
      <Logi/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,   
  }
});
