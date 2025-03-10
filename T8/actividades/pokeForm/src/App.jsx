import "./App.css";
import PokeForm from "./PokeForm";

function App() {
  function handleSearch(id) {
    console.log("Pokémon encontrado con ID:", id);
  }

  return (
    <>
      {/* Pasa la función handleSearch como prop */}
      <PokeForm onSearch={handleSearch} />
    </>
  );
}

export default App;
