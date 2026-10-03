export type Receta = {
  id: number;
  nombre: string;
  dificultad: 'Fácil' | 'Normal' | 'Difícil';
  momentos: ('Desayuno' | 'Almuerzo' | 'Merienda' | 'Cena')[];
  imagen: string;
  ingredientes: string[];
  pasos: string[];
  estado: 'pendiente' | 'aprobada';
};

export const recetas: Receta[] = [
  {
    id: 1,
    imagen: 'https://images.unsplash.com/photo-1510693206972-df098062cb71',
    nombre: 'Tostadas con huevo',
    dificultad: 'Fácil',
    momentos: ['Desayuno', 'Merienda'],
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
    estado: 'aprobada',
  },

  {
    id: 2,
    imagen: 'https://images.unsplash.com/photo-1510693206972-df098062cb71',
    nombre: 'Pasta con salsa',
    dificultad: 'Normal',
    momentos: ['Almuerzo', 'Cena'],
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
    estado: 'aprobada',
  },

  {
    id: 3,
    imagen: 'https://images.unsplash.com/photo-1510693206972-df098062cb71',
    nombre: 'Risotto',
    dificultad: 'Difícil',
    momentos: ['Almuerzo', 'Cena'],
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
    estado: 'aprobada',
  },

  {
    id: 4,
    imagen: 'https://images.unsplash.com/photo-1510693206972-df098062cb71',
    nombre: 'Omelette de queso',
    dificultad: 'Fácil',
    momentos: ['Desayuno', 'Almuerzo', 'Merienda', 'Cena'],
    ingredientes: [
      '2 huevos',
      'Queso',
      'Sal',
      'Pimienta',
    ],
    pasos: [
      'Batir los huevos.',
      'Calentar una sartén.',
      'Agregar los huevos.',
      'Agregar el queso.',
      'Doblar el omelette y servir.',
    ],
    estado: 'aprobada',
  },
];