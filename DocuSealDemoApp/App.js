import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SignForm from './components/SignForm';

export default function App() {
  return (
    <View style={styles.container}>
      <SignForm src="https://docuseal.co/d/LEVGR9rhZYf86M" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    flexDirection:'column',
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
