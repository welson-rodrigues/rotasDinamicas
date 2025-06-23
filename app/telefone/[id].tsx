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

  // Verificando se data existe e se os valores estão corretos vindos da API
  // Se não estiverem corretos, retorna "null"
  return (
    <View style={styles.container}>
      <Text variant="bodyLarge">ID: {id}</Text>

      <Text variant="bodyLarge">
        Color: {telefone.data ? (telefone.data.color || telefone.data.Color || "null") : "null"}
      </Text>

      <Text variant="bodyLarge">
        Capacity: {telefone.data ? (telefone.data.capacity || telefone.data.Capacity || telefone.data["capacity GB"] || "null") : "null"}
      </Text>

      <Text variant="bodyLarge">
        Price: {telefone.data ? (telefone.data.price || telefone.data.Price || "null") : "null"}
      </Text>

      <Text variant="bodyLarge">
        Generation: {telefone.data ? (telefone.data.generation || telefone.data.Generation || "null") : "null"}
      </Text>

      <Text variant="bodyLarge">
        Year: {telefone.data ? (telefone.data.year || "null") : "null"}
      </Text>

      <Text variant="bodyLarge">
        Description: {telefone.data ? (telefone.data.Description || "null") : "null"}
      </Text>

      <Text variant="bodyLarge">
        Case Size: {telefone.data ? (telefone.data["Case Size"] || "null") : "null"}
      </Text>

      <Text variant="bodyLarge">
        CPU model: {telefone.data ? (telefone.data["CPU model"] || "null") : "null"}
      </Text>

      <Text variant="bodyLarge">
        Hard disk size: {telefone.data ? (telefone.data["Hard disk size"] || "null") : "null"}
      </Text>

      <Text variant="bodyLarge">
        Strap Colour: {telefone.data ? (telefone.data["Strap Colour"] || "null") : "null"}
      </Text>

      <Text variant="bodyLarge">
        Screen size: {telefone.data ? (telefone.data["Screen size"] || "null") : "null"}
      </Text>

      <Text variant="bodyLarge">
        Case Size: {telefone.data ? (telefone.data["Case Size"] || "null") : "null"}
      </Text>
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
