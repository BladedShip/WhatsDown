import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Chats from './src/screens/Chats';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Chats/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingVertical:50,
    
  },
});
