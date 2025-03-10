import { useEffect } from "react";
import { useState } from "react";

const DEFAULT_LANGUAGE = 7; // Español

async function getPokemonData(){
  try{
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon-species?limit=1000`);
    if (!respuesta.ok){
      throw new console.error(`${respuesta.status}`);
    }

    const datos = await respuesta.json();

    const speciesData = await Promise.all(
      datos.results.map(async(pokemon)=>{
        const speciesRespuesta = await fetch(pokemon.url);
        const speciesInfo = await speciesRespuesta.json();
        return {
          id: speciesInfo.id,
          names: speciesInfo.names.map((n) => ({
            name: n.name,
            local_language_id: getLanguageId(n.language.name)
          }))
        }
      })  
    );
    return speciesData;
  }catch(error){
    console.error('Error', error);
    return [];
  }
}

function getLanguageId(language) {
  const languageMap = {
    es: 7, // Español
    fr: 5, // Francés
    de: 6, // Alemán
  };
  return languageMap[language] || 7; // Español por defecto
}

function pokemonsInLanguage(pokemons, language) {
  return pokemons.filter((pokemon) => 
    pokemon.names.some((n) => n.local_language_id === language)
  );
}


function PokeForm({onSearch}) {
  const [pokemons, setPokemons] = useState([]);
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE);
  const [searchName, setSearchName] = useState([]);
  
  useEffect(()=>{
    getPokemonData().then((data) => {
      setPokemons(data);
    });
  }, []);

  const filteredPokemons = pokemonsInLanguage(pokemons, language).map((pokemon) => ({
    id: pokemon.id,
    name: pokemon.names.find((n) => n.local_language_id === language)?.name || "Desconocido",
  }));

  function handleSearch(event) {
    event.preventDefault(); // Evita el refresco de la página

    const pokemon = filteredPokemons.find((p) => p.name.toLowerCase() === searchName.toLowerCase());

    if (pokemon) {
      onSearch(pokemon.id); // Llama a la función con el ID del Pokémon
    } else {
      console.error("Pokémon no encontrado");
    }
  }

  return (
    <div>
      <h2>PokeForm</h2>
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

        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default PokeForm;