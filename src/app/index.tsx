import { Receta, recetas } from '@/data/recetas';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
 const [dificultad, setDificultad] = useState<
  Receta['dificultad'] | ''
>('');
const [momento, setMomento] = useState<
  'Desayuno' | 'Almuerzo' | 'Merienda' | 'Cena' | ''
>('');
const [busqueda, setBusqueda] = useState('');
const recetasFiltradas = recetas.filter((receta) => {
  const coincideDificultad =
    dificultad === '' || receta.dificultad === dificultad;

  const coincideMomento =
    momento === '' || receta.momentos.includes(momento);

 const coincideBusqueda =
  receta.nombre
    .toLowerCase()
    .includes(busqueda.trim().toLowerCase());

  return coincideDificultad && coincideMomento && coincideBusqueda;
});

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.logo}>🍳 Recetapp</Text>

      <Text style={styles.title}>¿Qué cocinamos hoy?</Text>

      <Text style={styles.subtitle}>
        Encontrá una receta según tus ganas y tu nivel de cocina.
      </Text>
      <TextInput
  style={styles.searchInput}
  placeholder="Buscar receta..."
  value={busqueda}
  onChangeText={setBusqueda}
/>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>¿Para qué momento?</Text>

<Pressable
  style={[
    styles.button,
    momento === 'Desayuno' && styles.selectedButton,
  ]}
  onPress={() =>
  setMomento(momento === 'Desayuno' ? '' : 'Desayuno')
}
>
  <Text style={styles.cardText}>☕ Desayuno</Text>
</Pressable>

<Pressable
  style={[
    styles.button,
    momento === 'Almuerzo' && styles.selectedButton,
  ]}
 onPress={() =>
  setMomento(momento === 'Almuerzo' ? '' : 'Almuerzo')
}
>
  <Text style={styles.cardText}>🍝 Almuerzo</Text>
</Pressable>

<Pressable
  style={[
    styles.button,
    momento === 'Merienda' && styles.selectedButton,
  ]}
  onPress={() =>
  setMomento(momento === 'Merienda' ? '' : 'Merienda')
}
>
  <Text style={styles.cardText}>🧉 Merienda</Text>
</Pressable>

<Pressable
  style={[
    styles.button,
    momento === 'Cena' && styles.selectedButton,
  ]}
  onPress={() =>
  setMomento(momento === 'Cena' ? '' : 'Cena')
}
>
  <Text style={styles.cardText}>🌙 Cena</Text>
</Pressable>
        <Text style={styles.cardTitle}>Recetas por dificultad</Text>

      <Pressable
  style={[
    styles.button,
    dificultad === 'Fácil' && styles.selectedButton,
  ]}
  onPress={() =>
  setDificultad(dificultad === 'Fácil' ? '' : 'Fácil')
}
>
  <Text style={styles.cardText}>🟢 Fácil</Text>
</Pressable>

<Pressable
  style={[
    styles.button,
    dificultad === 'Normal' && styles.selectedButton,
  ]}
  onPress={() =>
  setDificultad(dificultad === 'Normal' ? '' : 'Normal')
}
>
  <Text style={styles.cardText}>🟡 Normal</Text>
</Pressable>

<Pressable
  style={[
    styles.button,
    dificultad === 'Difícil' && styles.selectedButton,
  ]}
  onPress={() =>
  setDificultad(dificultad === 'Difícil' ? '' : 'Difícil')
}
>
  <Text style={styles.cardText}>🔴 Difícil</Text>
</Pressable>
{(dificultad !== '' || momento !== '' || busqueda !== '') && (
  <View>
    <Text style={styles.sectionTitle}>
  Recetas encontradas
</Text>
{recetasFiltradas.length === 0 && (
  <Text style={styles.emptyText}>
    No encontramos recetas con esos filtros.
  </Text>
)}

  {recetasFiltradas.map((receta) => (
  <Pressable
    style={styles.recipeCard}
    key={receta.id}
    onPress={() => {
  console.log('TOQUÉ RECETA:', receta.id);
  router.push({
    pathname: '/receta/[id]',
    params: { id: receta.id.toString() },
  });
}}
>
  <Image
    source={{ uri: receta.imagen }}
    style={styles.recipeImage}
  />
  
    <Text style={styles.recipeTitle}>
      {receta.nombre}
    </Text>
  </Pressable>
))}
  </View>
)}
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f7f7f7',
  },

  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
     color: '#E85D04',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
    color: '#222222',
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666666',
  },

  card: {
    padding: 20,
    borderRadius: 16,
    backgroundColor: '#eeeeee',
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  cardText: {
    fontSize: 17,
    marginBottom: 8,
  },
  button: {
  padding: 16,
  borderRadius: 12,
  marginBottom: 10,
  backgroundColor: '#ffffff',
  borderWidth: 1,
  borderColor: '#dddddd',

},

selectedButton: {
  backgroundColor: '#d9d9d9',
  borderColor: '#E85D04',
  borderWidth: 2,
},
  selectedText: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 15,
},
recipeText: {
  fontSize: 16,
  marginTop: 8,
  color: '#444444',
  lineHeight: 24,
},
sectionTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 20,
  marginBottom: 10,
},
recipeCard: {
  marginTop: 20,
  padding: 20,
  borderRadius: 16,
  backgroundColor: '#ffffff',
  borderWidth: 1,
  borderColor: '#eeeeee',
  marginBottom: 20,
},

recipeTitle: {
  fontSize: 24,
  fontWeight: 'bold',
  marginBottom: 10,
  color: '#E85D04',
},
searchInput: {
  backgroundColor: '#ffffff',
  borderWidth: 1,
  borderColor: '#dddddd',
  borderRadius: 12,
  paddingHorizontal: 16,
  paddingVertical: 12,
  fontSize: 16,
  marginBottom: 20,
},
emptyText: {
  fontSize: 16,
  color: '#777777',
  marginTop: 10,
  textAlign: 'center',
},
recipeImage: {
  width: '100%',
  height: 180,
  borderRadius: 12,
  marginBottom: 12,
},
});