import { useState, useEffect } from "react";
import { getPokemonData } from "./pokemon_api.js"; // Importa la función que obtiene los datos

const DEFAULT_LANGUAGE = '7'; // Español

// Función para filtrar Pokémon en el idioma seleccionado
function pokemonsInLanguage(pokemons, language) {
  return pokemons.filter(pokemon => pokemon.local_language_id === language);
}

function PokeForm({ onSearch }) { // Recibe la función onSearch como prop
  const [pokemons, setPokemons] = useState([]); // Estado para almacenar los Pokémon
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE); // Estado para el idioma
  const [pokemonName, setPokemonName] = useState(""); // Estado para el nombre del Pokémon

  // Cargar datos al montar el componente
  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonData(); // Obtiene los datos de los Pokémon
      setPokemons(data); // Guarda los datos en el estado
    }
    fetchData();
  }, []);

  // Filtra los Pokémon según el idioma seleccionado
  const filteredPokemons = pokemonsInLanguage(pokemons, language);

  // Maneja el cambio en el campo de texto
  const handleNameChange = (event) => {
    setPokemonName(event.target.value);
  };

  // Maneja el cambio de idioma
  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  // Maneja la búsqueda cuando se hace submit
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario recargue la página
    const selectedPokemon = filteredPokemons.find(pokemon => pokemon.name === pokemonName);
    
    if (selectedPokemon) {
      onSearch(selectedPokemon.pokemon_species_id); // Llama a onSearch con el ID del Pokémon
    } else {
      console.log("Pokémon no encontrado en este idioma.");
    }
  };

  return (
    <div>
      <h2>PokeForm</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre del pokémon:
          <input 
            type="text" 
            name="name" 
            list="pokemons" 
            value={pokemonName} 
            onChange={handleNameChange} 
          />
        </label>
        
        <datalist id="pokemons">
          {filteredPokemons.map((pokemon) => (
            <option key={pokemon.pokemon_species_id} value={pokemon.name} />
          ))}
        </datalist>

        <label>
          Lenguaje:
          <select value={language} onChange={handleLanguageChange}>
            <option value="7">Español</option>
            <option value="5">Francés</option>
            <option value="6">Alemán</option>
          </select>
        </label>

        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default PokeForm;
