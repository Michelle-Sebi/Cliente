import { useState } from "react";
import PokeForm from "./PokeForm";
import PokeData from "./PokeData";
import "./pokedex.css";

function Pokedex() {
  const [selectedPokemonId, setSelectedPokemonId] = useState(null); // Estado para el ID del Pokémon seleccionado

  // Función que se pasa a PokeForm y actualiza el estado con el ID del Pokémon
  const handleSearch = (pokemonId) => {
    setSelectedPokemonId(pokemonId);
  };

  return (
    <div>
      <h1>Pokedex</h1>
      <PokeForm onSearch={handleSearch} /> {/* Formulario para buscar el Pokémon */}
      {selectedPokemonId && <PokeData id={selectedPokemonId} />} {/* Muestra los datos del Pokémon */}
    </div>
  );
}

export default Pokedex;
