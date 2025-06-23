import axios from "axios";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { SafeAreaView } from 'react-native-safe-area-context';


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
    <SafeAreaView style={{flex: 1, backgroundColor: 'black'}}>
      <View style={styles.container}>
        <Text variant="bodyLarge" style={styles.id}>ID: {id}</Text>

        <Text variant="bodyLarge"
          style={styles.color}>
          Color: {telefone.data ? (telefone.data.color || telefone.data.Color || "null") : "null"}
        </Text>

        <Text variant="bodyLarge"
          style={styles.Capacity}>
          Capacity: {telefone.data ? (telefone.data.capacity || telefone.data.Capacity || telefone.data["capacity GB"] || "null") : "null"}
        </Text>

        <Text variant="bodyLarge"
          style={styles.Price}>
          Price: {telefone.data ? (telefone.data.price || telefone.data.Price || "null") : "null"}
        </Text>

        <Text variant="bodyLarge"
          style={styles.Generation}>
          Generation: {telefone.data ? (telefone.data.generation || telefone.data.Generation || "null") : "null"}
        </Text>

        <Text variant="bodyLarge"
          style={styles.Year}>
          Year: {telefone.data ? (telefone.data.year || "null") : "null"}
        </Text>

        <Text variant="bodyLarge"
          style={styles.Description}>
          Description: {telefone.data ? (telefone.data.Description || "null") : "null"}
        </Text>

        <Text variant="bodyLarge"
        style={styles.CaseSize}>
          Case Size: {telefone.data ? (telefone.data["Case Size"] || "null") : "null"}
        </Text>

        <Text variant="bodyLarge"
          style={styles.CPUmodel}>
          CPU model: {telefone.data ? (telefone.data["CPU model"] || "null") : "null"}
        </Text>

        <Text variant="bodyLarge"
          style={styles.Harddisksize}>
          Hard disk size: {telefone.data ? (telefone.data["Hard disk size"] || "null") : "null"}
        </Text>

        <Text variant="bodyLarge"
          style={styles.StrapColour}>
          Strap Colour: {telefone.data ? (telefone.data["Strap Colour"] || "null") : "null"}
        </Text>

        <Text variant="bodyLarge"
          style={styles.Screensize}>
          Screen size: {telefone.data ? (telefone.data["Screen size"] || "null") : "null"}
        </Text>

        <Text variant="bodyLarge"
          style={styles.CaseSize}>
          Case Size: {telefone.data ? (telefone.data["Case Size"] || "null") : "null"}
        </Text>
      </View>
    </SafeAreaView>
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

  color: {
    color: "red",
  },

  Capacity: {
    color: "blue",
  },

  Price: {
    color: "green",
  },

  Generation: {
    color: "purple",
  },

  Year: {
    color: "orange",
  },

  Description: {
    color: "brown",
  },

  CaseSize: {
    color: "#FF007F",
  },

  CPUmodel: {
    color: "gray",
  },

  Harddisksize: {
    color: "white",
  },

  StrapColour: {
    color: "#EEAD2D",
  },

  Screensize: {
    color: "cyan",
  },

  id: {
    color: "white"
  },
});
