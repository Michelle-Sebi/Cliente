//1. FILTRAR PARES

const numeros = [10, 15, 20, 25, 30, 35, 40];

const numPares = numeros.filter(num=>num % 2 === 0)

console.log(numPares)


//2. MAYORES DE EDAD

const personas = [
    { nombre: "Juan", edad: 17 },
    { nombre: "María", edad: 22 },
    { nombre: "Pedro", edad: 15 },
    { nombre: "Laura", edad: 30 }
];

const mayores = personas.filter(persona=>persona.edad >= 18)

console.log(mayores)


//3.MIX (nombres de los aprobados)

const estudiantes = [
    { nombre: "Ana", nota: 8 },
    { nombre: "Luis", nota: 4 },
    { nombre: "Carlos", nota: 6 },
    { nombre: "Elena", nota: 3 }
  ];

const aprobados = (estudiantes.filter(estudiante=>estudiante.nota >= 5))

const nomAprobados = aprobados.map(alumno=>alumno.nombre)

console.log(nomAprobados)