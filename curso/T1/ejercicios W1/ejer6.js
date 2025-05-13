const modulos = [
    {
        nombre: 'Sistemas informáticos',
        curso: 1,
        alumnos: ['Don Pepito', 'Perico', 'Don José']
    },
    {
        nombre: 'Desarrollo Web en entorno cliente',
        curso: 2,
        asignatura: '',
        alumnos: ['Juan', 'Perico', 'Andrés', 'Don Pepito']
    },    {
        nombre: 'Desarrollo Web en entorno servidor',
        curso: 2,
        asignatura: '',
        alumnos: ['Juan', 'Perico', 'Andrés','Pepe' ]
    },    {
        nombre: 'Diw',
        curso: 1,
        asignatura: '',
        alumnos: ['Perico', 'Andrés', 'Don Pepito']
    },    {
        nombre: 'asign 4',
        curso: 2,
        asignatura: '',
        alumnos: ['Paco', 'Antonio', 'Don Pepito']
    },
];

let alumnosPrimero = [];
let alumnosSegundo = [];

for(const modulo of modulos){
    if (modulo.curso === 1){
        alumnosPrimero = alumnosPrimero.concat(modulo.alumnos);
    }
    else if (modulo.curso === 2){
        alumnosSegundo = alumnosSegundo.concat(modulo.alumnos);
    }
}

alumnosPrimero = [...new Set(alumnosPrimero)];
alumnosSegundo = [...new Set(alumnosSegundo)];

let alumnosPrimeroYSegungo= [];

for(let i = 0; i<alumnosPrimero.length; i++){
    for(let j = 0; j <alumnosSegundo.length; j++){
        if(alumnosPrimero[i] === alumnosSegundo[j]){
            alumnosPrimeroYSegungo.push(alumnosPrimero[i]);
        }
    }
}

console.log('Los alumnos matriculados de primero y segundo a la vez son: ' + alumnosPrimeroYSegungo);



