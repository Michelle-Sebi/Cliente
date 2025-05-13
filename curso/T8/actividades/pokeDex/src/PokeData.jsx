import { useEffect, useState } from 'react';

function PokeData({ id }) {
  const [pokemon, setPokemon] = useState(null);
  
  useEffect(() => {
    if (id) {
      const fetchPokemonData = async () => {
        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          if (response.ok) {
            const data = await response.json();
            setPokemon(data);
          } else {
            console.error("Error al obtener datos del Pokémon");
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
      
      fetchPokemonData();
    }
  }, [id]);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Altura: {pokemon.height}</p>
      <p>Peso: {pokemon.weight}</p>
    </div>
  );
}

export default PokeData;
