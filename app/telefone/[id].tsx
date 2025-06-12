import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

// começando por aqui
const globalData = {
    id: `${i}`,
    name: `Celular ${i + 1}`,
    data: {
      color: `Cor ${i + 1}`,
      capacity: `Capacidade ${i + 1}`,
      price: `$${(i + 1) * 100}`,
      generation: `Geração ${i + 1}`,
      year: 2023,
    },
}

export default function TelefoneDetalhe() {
  const { id } = useLocalSearchParams();

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Detalhe do telefone: ${id}`,
    });
  }, [navigation, id]);

  return (
    <View style={styles.container}>
      <Text variant="bodyLarge">ID: {id}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'flex-start',
  },
});
