async function movimientos(nombrePokemon) {
    try {
        // Paso 1: Obtener los datos del Pokémon
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`);
        if (!response.ok) {
            throw new Error(`No se pudo obtener el Pokémon: ${nombrePokemon}`);
        }
        const data = await response.json();

        // Paso 2: Extraer las URLs de los movimientos
        const movimientosUrls = data.moves.map(move => move.move.url);

        // Paso 3: Obtener los nombres de los movimientos en castellano
        const movimientosPromises = movimientosUrls.map(async url => {
            const moveResponse = await fetch(url);
            if (!moveResponse.ok) {
                throw new Error(`No se pudo obtener el movimiento: ${url}`);
            }
            const moveData = await moveResponse.json();
            // Buscar el nombre en castellano
            const nombreEspanol = moveData.names.find(name => name.language.name === 'es');
            return nombreEspanol ? nombreEspanol.name : null;
        });

        // Esperar a que todas las solicitudes se completen
        const nombresMovimientos = await Promise.all(movimientosPromises);

        // Filtrar nombres nulos (por si algún movimiento no tiene nombre en castellano)
        const nombresFiltrados = nombresMovimientos.filter(nombre => nombre !== null);

        // Paso 4: Ordenar los nombres alfabéticamente
        nombresFiltrados.sort((a, b) => a.localeCompare(b));

        // Paso 5: Devolver el resultado
        return nombresFiltrados;
    } catch (error) {
        console.error("Error:", error.message);
        return []; // Devolver un array vacío en caso de error
    }
}

// Ejemplo de uso
movimientos('bulbasaur')
    .then(movimientos => console.log(movimientos))
    .catch(error => console.error(error));