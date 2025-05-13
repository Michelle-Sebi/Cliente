
//1. DUPLICAR VALORES

const numeros = [1, 2, 3, 4, 5];

const duplicado = numeros.map((num)=>{
    return num*2
})

console.log(duplicado);


//2.CONVERTIR A MAYUSCULAS  

const nombres = ["Ana", "Carlos", "Elena", "Marcos"];

const nomMayusculas = nombres.map(nombre=> nombre.toUpperCase())

console.log(nomMayusculas);


//3.TRANSFORMAR OBJETOS

const productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 }
];

const nomProductos = productos.map(producto=>producto.nombre)

console.log(nomProductos)