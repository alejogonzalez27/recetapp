import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const recetas = {
   Fácil: {
    nombre: 'Tostadas con huevo',
    ingredientes: [
      '2 huevos',
      '2 tostadas',
      'Sal',
      'Pimienta',
    ],
    pasos: [
      'Tostar el pan.',
      'Cocinar los huevos.',
      'Agregar sal y pimienta.',
      'Servir.',
    ],
  },

  Normal: {
    nombre: 'Pasta con salsa',
    ingredientes: [
      '200 g de pasta',
      'Salsa de tomate',
      'Sal',
      'Queso rallado',
    ],
    pasos: [
      'Hervir el agua.',
      'Cocinar la pasta.',
      'Preparar la salsa.',
      'Mezclar y servir.',
    ],
  },

  Difícil: {
    nombre: 'Risotto',
    ingredientes: [
      'Arroz',
      'Caldo',
      'Cebolla',
      'Queso parmesano',
    ],
    pasos: [
      'Preparar el caldo.',
      'Saltear la cebolla.',
      'Agregar el arroz.',
      'Incorporar el caldo poco a poco.',
      'Agregar el queso y servir.',
    ],
  },
};

export default function HomeScreen() {
  const [dificultad, setDificultad] = useState<
  keyof typeof recetas | ''
>('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <Text style={styles.logo}>🍳 Recetapp</Text>

      <Text style={styles.title}>¿Qué cocinamos hoy?</Text>

      <Text style={styles.subtitle}>
        Encontrá una receta según tus ganas y tu nivel de cocina.
      </Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Recetas por dificultad</Text>

      <Pressable
  style={[
    styles.button,
    dificultad === 'Fácil' && styles.selectedButton,
  ]}
  onPress={() => setDificultad('Fácil')}
>
  <Text style={styles.cardText}>🟢 Fácil</Text>
</Pressable>

<Pressable
  style={[
    styles.button,
    dificultad === 'Normal' && styles.selectedButton,
  ]}
  onPress={() => setDificultad('Normal')}
>
  <Text style={styles.cardText}>🟡 Normal</Text>
</Pressable>

<Pressable
  style={[
    styles.button,
    dificultad === 'Difícil' && styles.selectedButton,
  ]}
  onPress={() => setDificultad('Difícil')}
>
  <Text style={styles.cardText}>🔴 Difícil</Text>
</Pressable>
{dificultad !== '' && (
  <Text style={styles.recipeText}>
  Receta: {recetas[dificultad].nombre}
</Text>
)}
{dificultad !== '' && (
  <View>
    <Text style={styles.sectionTitle}>Ingredientes</Text>

   {recetas[dificultad].ingredientes.map((ingrediente, index) => (
  <Text style={styles.recipeText} key={index}>
    • {ingrediente}
  </Text>
))}
  </View>
)}
{dificultad !== '' && (
  <View>
    <Text style={styles.sectionTitle}>Preparación</Text>

    {recetas[dificultad].pasos.map((paso, index) => (
      <Text style={styles.recipeText} key={index}>
        {index + 1}. {paso}
      </Text>
    ))}
  </View>
)}
{dificultad !== '' && (
  <Text style={styles.selectedText}>
    Elegiste: {dificultad}
  </Text>
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
    justifyContent: 'center',
  },

  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
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
  padding: 12,
  borderRadius: 10,
  marginBottom: 8,
  backgroundColor: '#ffffff',
},

selectedButton: {
  backgroundColor: '#d9d9d9',
},
  selectedText: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 15,
},
recipeText: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 15,
},
sectionTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  marginTop: 20,
  marginBottom: 10,
},
});