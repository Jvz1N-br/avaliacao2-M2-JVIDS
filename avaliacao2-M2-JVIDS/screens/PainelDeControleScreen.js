import Interruptor from '../components/Interruptor';
import { View } from 'react-native';
import { Text } from 'react-native';
export default function PainelDeControleScreen() {
  return (
    <View>
        <Text style={{fontSize:33, fontWeight: 'bold'}}>Painel de Controle da Casa</Text>
    <View style={{paddingHorizontal:70}}>
      <Interruptor nome={'Luz da cozinha'}/>
      <Interruptor nome={'Luz da Sala'}/>
      <Interruptor nome={'Luz da quarto'}/>
      </View>
    </View>
  );
}