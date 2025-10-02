import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PainelDeControleScreen from './screens/PainelDeControleScreen';
import Interruptor from '../components/interruptor';

export default function App() {
  return (
    <View style={styles.container}>
      <PainelDeControleScreen/>
      <Interruptor/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
