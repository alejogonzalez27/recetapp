import { recetas } from '@/data/recetas';
import { useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text } from 'react-native';

export default function RecetaScreen() {
    const { id } = useLocalSearchParams();
    const receta = recetas.find(
  (receta) => receta.id === Number(id)
);
  return (
  <ScrollView style={styles.container}>
  <Text style={styles.title}>
    {receta?.nombre}
  </Text>
  <Image
    source={{ uri: receta?.imagen }}
    style={styles.recipeImage}
  />
  <Text style={styles.meta}>
    {receta?.dificultad}
  </Text>

  <Text style={styles.meta}>
    {receta?.momentos.join(' • ')}
  </Text>

  <Text style={styles.sectionTitle}>
    Ingredientes
  </Text>

  {receta?.ingredientes.map((ingrediente, index) => (
    <Text style={styles.text} key={index}>
      • {ingrediente}
    </Text>
  ))}

  <Text style={styles.sectionTitle}>
    Preparación
  </Text>

  {receta?.pasos.map((paso, index) => (
    <Text style={styles.text} key={index}>
      {index + 1}. {paso}
    </Text>
  ))}
</ScrollView>
    
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#f7f7f7',
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E85D04',
  },
  sectionTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 24,
  marginBottom: 10,
  color: '#222222',
},

text: {
  fontSize: 16,
  color: '#444444',
  marginBottom: 8,
  lineHeight: 24,
},
meta: {
  fontSize: 16,
  color: '#666666',
  marginTop: 6,
},
recipeImage: {
  width: '100%',
  height: 220,
  borderRadius: 16,
  marginTop: 16,
  marginBottom: 16,
},
});