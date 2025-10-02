import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function Interruptor({ nome }) {
  const [ligado, setLigado] = useState(false);


  return(
    <View>
        <Text>{nome}{ligado ? 'Ligado' : 'Desligado'}</Text>
        <Button title="alternar" onPress={()=> setLigado(!ligado)}/>
    </View>
  )
}
