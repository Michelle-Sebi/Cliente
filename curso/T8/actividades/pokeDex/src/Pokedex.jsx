import './pokedex.css';
import { useState } from 'react';
import PokeData from './PokeData';
import PokeForm from './PokeForm';

function Pokedex() {
  // Estado para almacenar el ID del Pokémon seleccionado
  const [pokemonId, setPokemonId] = useState(null);

  // Función que se pasa a PokeForm para manejar la búsqueda
  function handleSearch(id) {
    setPokemonId(id);  // Actualiza el ID del Pokémon seleccionado
  }

  return (
    <div>
      <h1>Pokedex</h1>
      
      {/* PokeForm maneja la búsqueda y pasa el ID del Pokémon encontrado */}
      <PokeForm onSearch={handleSearch} />

      {/* PokeData recibe el ID del Pokémon para mostrar sus datos */}
      {pokemonId && <PokeData id={pokemonId} />}
    </div>
  );
}

export default Pokedex;
                                                                        