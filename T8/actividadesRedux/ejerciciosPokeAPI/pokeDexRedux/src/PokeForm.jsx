import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setPokemonId } from "./store"; // Importamos la acción de Redux
import { getPokemonData } from "./pokemon_api.js";

const DEFAULT_LANGUAGE = "7"; // Español

function PokeForm() {
  const dispatch = useDispatch(); // Hook para despachar acciones
  const [pokemons, setPokemons] = useState([]);
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [pokemonName, setPokemonName] = useState("");

  useEffect(() => {
    async function fetchData() {
      const data = await getPokemonData();
      setPokemons(data);
    }
    fetchData();
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const selectedPokemon = pokemons.find((p) => p.name === pokemonName);

    if (selectedPokemon) {
      dispatch(setPokemonId(selectedPokemon.pokemon_species_id)); // Actualiza el estado global
    } else {
      console.log("Pokémon no encontrado.");
    }
  };

  return (
    <div>
      <h2>PokeForm</h2>
      <form onSubmit={handleSearch}>
        <label>
          Nombre del pokémon:
          <input
            type="text"
            list="pokemons"
            value={pokemonName}
            onChange={(e) => setPokemonName(e.target.value)}
          />
        </label>

        <datalist id="pokemons">
          {pokemons.map((p) => (
            <option key={p.pokemon_species_id} value={p.name} />
          ))}
        </datalist>

        <label>
          Lenguaje:
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
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
