let students = [
  {
    name: 'Alvaro',
    score: 10,
  },
  {
    name: 'Daniel',
    score: 16,
  },
  {
    name: 'Alexys',
    score: 12,
  },
  {
    name: 'Rafa',
    score: 17,
  },
  {
    name: 'Alejandro',
    score: 8,
  },
  {
    name: 'Sofia',
    score: 9,
  }
];

// creare una metodo filter que tome todos los alumnos con notas mayores a tanto.
// Lo que el metodo filter hace es tomar un array recorrerlo y devolvernos un array nuevo que cumpla con la condicion aplicada sobre ese

const filtro = students.filter(student => student.score >= 10);
console.log(filtro);



// Proximo ejercicio lo que quiero es filtrar los elementos
// provenientes de el array y que me los filtre para eliminar duplicados
// recordemos que el metodo filter al igual que map devuelve un array nuevo.

let numbers = [1, 5, 23, 4, 12, 45, 78, 8, 23, 4];

let duplicados = numbers.filter((item, index) => numbers.indexOf(item) === index);
console.log(duplicados)



let nombres_duplicados = ['ricardo', 'sofia', 'esteban', 'pablo', 'esteban', 'ricardo'];

let array_new = nombres_duplicados.filter((items, index) => nombres_duplicados.indexOf(items) === index);
console.log(array_new);



let array = ['uno', 'dos', 'dos', 'tres', 'uno'];

let clear = array.filter((item, index) => array.indexOf(item) === index);
console.log(clear);