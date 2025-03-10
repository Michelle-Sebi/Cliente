import PokeForm from "./PokeForm";
import PokeData from "./PokeData";

function Pokedex() {
  return (
    <div>
      <h1>Pokedex</h1>
      <PokeForm /> {/* Formulario para buscar el Pokémon */}
      <PokeData /> {/* Muestra los datos del Pokémon seleccionado */}
    </div>
  );
}

export default Pokedex;
