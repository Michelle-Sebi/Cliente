const fetch = require('node-fetch')

function movimientos(pokemon){

    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((response)=>{
        console.log (`status: ${response.status}`);
        if(response.status !== 200){
         throw `Respuesta: ${response.status}`;
        }
        return response.json();    
    })
    .then((pokemon)=>{
        let movimientosNombre = pokemon.moves
        .map(function(pokemon){
            return pokemon.move.name
        })
        let movimientosOrdenados = movimientosNombre
        .sort();
        movimientosOrdenados.forEach(movimiento => {
            console.log(movimiento)
        });
    })
    .catch((error)=>{
        console.log(`Error: ${error}`)
    })
    
}

movimientos('bulbasaur');