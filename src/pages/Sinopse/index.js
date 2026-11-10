import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './styles';

export default function Sinopse({ route }) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{route.params?.nome} - Sinopse</Text>

      <ScrollView style={styles.box}>
        <Text style={styles.sinopse}>{route.params?.sinopse}</Text>
      </ScrollView>
    </View>
  );
}
