import { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Hook para obtener el estado de Redux
import Loading from "./Loading";
import { getSpeciesSprite } from "./pokemon_api.js";

function PokeData() {
  const pokemonId = useSelector((state) => state.pokemon.selectedPokemonId); // Obtenemos el ID del Pokémon seleccionado
  const [spriteUrl, setSpriteUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!pokemonId) return; // Si no hay ID seleccionado, no hacer nada

    const fetchSprite = async () => {
      setIsLoading(true);
      const url = await getSpeciesSprite(pokemonId);
      setSpriteUrl(url);
      setIsLoading(false);
    };

    fetchSprite();
  }, [pokemonId]); // Se ejecuta cuando cambia el ID del Pokémon

  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        spriteUrl && (
          <>
            <h2>PokeData</h2>
            <div className="pokedata">
              <img src={spriteUrl} alt={`Pokémon con ID ${pokemonId}`} />
            </div>
          </>
        )
      )}
    </div>
  );
}

export default PokeData;
