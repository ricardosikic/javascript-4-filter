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

