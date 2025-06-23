import axios from "axios";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useLayoutEffect, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";


export default function TelefoneDetalhe() {
  const { id } = useLocalSearchParams();

  // Guardando os itens
  const [telefone, setTelefone] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  // Fazendo a mesma requisição do index.tsx, mas agora para um item específico
  async function buscarOutrosDados() {
    setIsLoading(true);
    const resultado = await axios.get(`https://api.restful-api.dev/objects/${id}`);
    setTelefone(resultado.data);
    setIsLoading(false);
  }

  useEffect(() => {
      buscarOutrosDados();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Detalhe do telefone: ${id}`,
    });
  }, [navigation, id]);

  if (isLoading) {
    return (
      <View style={styles.carregando}>
        <Text variant="bodyLarge">Carregando...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text variant="bodyLarge">ID: {id}</Text>
      <Text variant="bodyLarge">Color: {telefone.data.color}</Text>
      <Text variant="bodyLarge">Capacity: {telefone.data.capacity}</Text>
      <Text variant="bodyLarge">Price: {telefone.data.price}</Text>
      <Text variant="bodyLarge">Generation: {telefone.data.generation}</Text>
      <Text variant="bodyLarge">Year: {telefone.data.year}</Text>
      <Text variant="bodyLarge">Description: {telefone.data.Description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: "flex-start",
  },

  carregando: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
