import { configureStore, createSlice } from "@reduxjs/toolkit";

// Slice para gestionar el Pokémon seleccionado
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: { selectedPokemonId: null }, // Estado inicial
  reducers: {
    setPokemonId: (state, action) => {
      state.selectedPokemonId = action.payload; // Actualiza el ID del Pokémon seleccionado
    },
  },
});

// Exportamos la acción para cambiar el ID del Pokémon
export const { setPokemonId } = pokemonSlice.actions;

// Creamos el store
const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer, // Añadimos el slice al store
  },
});

export default store;
