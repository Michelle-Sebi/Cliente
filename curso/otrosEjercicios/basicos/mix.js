//1. PRODUCTOS CON DESCUENTO ( cuestan más de 50 para aplicarles un descuento del 20%.

const productos = [
    { nombre: "Laptop", precio: 1000 },
    { nombre: "Mouse", precio: 30 },
    { nombre: "Teclado", precio: 70 },
    { nombre: "Monitor", precio: 200 }
];

const caros = productos.filter(producto=>producto.precio > 50)

const prodDescuento = caros.map(prod=>{
    return{
    nombre: prod.nombre,
    precio: prod.precio*0.8
    }
})

console.log(prodDescuento)

//2. EMPLEADOS SALARIO ALTO (los nombres de los que ganan mas de 3000)

const empleados = [
    { nombre: "Ana", salario: 2500 },
    { nombre: "Carlos", salario: 4000 },
    { nombre: "Elena", salario: 3200 },
    { nombre: "Luis", salario: 2800 }
];

const salAlto = empleados.filter(empleado=>empleado.salario > 3000)

const nomSalAlto = salAlto.map(empleado=>empleado.nombre)

console.log(nomSalAlto)

//3.ORDENAR X NOTA Y DEVOLVER LOS 3 NOMBRES DE NOTA MAS ALTA

const estudiantes = [
    { nombre: "Juan", nota: 7 },
    { nombre: "María", nota: 9 },
    { nombre: "Pedro", nota: 5 },
    { nombre: "Laura", nota: 10 },
    { nombre: "Andrés", nota: 8 }
];


const estudiOrdenados = estudiantes.sort((a, b)=>b.nota - a.nota);

const top3 = estudiOrdenados.slice(0,3).map(alumno=>alumno.nombre)

console.log(top3)

//4.NOMBRES DE PERSONAS CON GMAIL

const personas = [
    { nombre: "David", email: "david@gmail.com" },
    { nombre: "Sara", email: "sara@yahoo.com" },
    { nombre: "Carlos", email: "carlos@gmail.com" },
    { nombre: "Elena", email: "elena@outlook.com" }
];

const gmail = personas.filter(persona=>persona.email.includes("@gmail.com")) 

const nomGmail = gmail.map(persona=> persona.nombre)

console.log(nomGmail)

//CALCULAR TOTAL DE PUNTOS


const partidos = [
    { golesAFavor: 3, golesEnContra: 1 }, // 3 puntos
    { golesAFavor: 2, golesEnContra: 2 }, // 1 punto
    { golesAFavor: 0, golesEnContra: 1 }, // 0 puntos
    { golesAFavor: 4, golesEnContra: 2 }  // 3 puntos
];
let puntos; 
const puntosPartido = partidos.map((partido)=>{
    if (partido.golesAFavor>partido.golesEnContra){
        puntos = 3
    }else if(partido.golesAFavor<partido.golesEnContra){
        puntos = 0
    }else{
        puntos = 1
    }  
    return puntos  
})

console.log(puntosPartido)

const total = puntosPartido.reduce((acumulador, puntos)=>acumulador + puntos, 0);

console.log(total)


//6. encuentra a los tres más jóvenes y devuelve un nuevo array con solo sus nombres y edades.

const persones = [
    { nombre: "Pedro", edad: 30 },
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 40 },
    { nombre: "Elena", edad: 20 },
    { nombre: "Carlos", edad: 35 }
];

const edadOrdenada = persones.sort((a,b)=>a.edad-b.edad)
const jovenes = edadOrdenada.slice(0,3).map((joven)=>{
    return[
        joven.nombre, 
        joven.edad
    ]})
console.log(jovenes)