import { useLocalSearchParams, useNavigation } from 'expo-router';
import { useLayoutEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

type ItemType = {
  id: string;
  name: string;
  data: Record<string, any>;
};

// começando por aqui
const globalData = ItemType[] = Array.from({ length: 10 }, (_, i) =>{
    id: `${i}`,
    name: `Celular ${i + 1}`,
    data: {
      color: `Cor ${i + 1}`,
      capacity: `Capacidade ${i + 1}`,
      price: `$${(i + 1) * 100}`,
      generation: `Geração ${i + 1}`,
      year: 2023,
    },
}),

const [data, setData] = useState<ItemType[]>([]);
const [isLoading, setIsLoading] = useState(true);

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
