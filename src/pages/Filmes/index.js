import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';
import { styles } from './styles';

export default function Filmes() {
  const [filmes, setFilmes] = useState([])
  const [loading, setLoading] = useState(true)

  // Quando o componente é montado em tela (quando abrimos o App)
  useEffect(() => {
    const carregarFilmes = async () => {
      const response = await api.get('/r-api/?api=filmes')
      setFilmes(response.data)
      setLoading(false)
    };

    carregarFilmes();
  }, []);

  if (loading) {
    return (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <ActivityIndicator color="#09A6FF" size={40} />
      </View>
    )
  } else {
    return (
      <View style={styles.container}>
        <FlatList
          data={filmes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Filme data={item} />}
        />
      </View>
    );
  }
}

function Filme(props) {
  const navigation = useNavigation();

  function leiaMais() {
    navigation.navigate('Sinopse', { nome: props.data.nome, sinopse: props.data.sinopse });
  }

  return (
    <View style={styles.card}>
      <View style={styles.linha}>
        <Text style={styles.nome}>{props.data.nome}</Text>
        <TouchableOpacity onPress={leiaMais}>
          <Text style={styles.leiaMais}>Leia mais</Text>
        </TouchableOpacity>
      </View>

      <Image style={styles.foto} source={{ uri: props.data.foto }} />
    </View>
  );
}
