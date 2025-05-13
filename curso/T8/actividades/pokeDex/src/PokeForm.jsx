import { useEffect, useState } from "react";

const DEFAULT_LANGUAGE = 7; // Español

async function getPokemonData() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon-species?limit=1000");
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const data = await response.json();

    // Obtener nombres en diferentes idiomas para cada Pokémon
    const speciesData = await Promise.all(
      data.results.map(async (pokemon) => {
        const speciesResponse = await fetch(pokemon.url);
        const speciesInfo = await speciesResponse.json();
        return {
          id: speciesInfo.id,
          names: speciesInfo.names.map((n) => ({
            name: n.name,
            local_language_id: getLanguageId(n.language.name),
          })),
        };
      })
    );

    return speciesData;
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return [];
  }
}

// Mapeo de idiomas de PokéAPI a `local_language_id`
function getLanguageId(language) {
  const languageMap = {
    es: 7, // Español
    fr: 5, // Francés
    de: 6, // Alemán
  };
  return languageMap[language] || 7; // Español por defecto
}

// Filtra los Pokémon en el idioma seleccionado
function pokemonsInLanguage(pokemons, language) {
  return pokemons.map((pokemon) => ({
    id: pokemon.id,
    name:
      pokemon.names.find((n) => n.local_language_id === language)?.name || "Desconocido",
  }));
}

function PokeForm({ onSearch }) {
  const [pokemons, setPokemons] = useState([]); // Lista de Pokémon
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE); // Idioma seleccionado
  const [searchName, setSearchName] = useState(""); // Nombre introducido en el input

  useEffect(() => {
    getPokemonData().then((data) => {
      setPokemons(data);
    });
  }, []);

  // Filtra los nombres en el idioma seleccionado
  const filteredPokemons = pokemonsInLanguage(pokemons, language);

  function handleSearch(event) {
    event.preventDefault();

    const pokemon = filteredPokemons.find(
      (p) => p.name.toLowerCase() === searchName.toLowerCase()
    );

    if (pokemon) {
      onSearch(pokemon.id);
    } else {
      console.error("Pokémon no encontrado");
    }
  }

  return (
    <div>
      <h2>Buscar Pokémon</h2>
      <form onSubmit={handleSearch}>
        <label>
          Nombre del Pokémon:
          <input
            type="text"
            name="name"
            list="pokemons"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
          />
        </label>
        <datalist id="pokemons">
          {filteredPokemons.map((pokemon) => (
            <option key={pokemon.id} value={pokemon.name} />
          ))}
        </datalist>
        
        <label>
          Lenguaje:
          <select value={language} onChange={(e) => setLanguage(Number(e.target.value))}>
            <option value="7">Español</option>
            <option value="5">Francés</option>
            <option value="6">Alemán</option>
          </select>
        </label>

        <input type="submit" value="Buscar" />
      </form>
    </div>
  );
}

export default PokeForm;
