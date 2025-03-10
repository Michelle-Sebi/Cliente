import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import questionMark from './assets/question_mark.png';

const initialState={
    sprite:questionMark,
    answers: [],
    score:0,
    loading: true,
    correct:0,
    clickado: false
};

//FUNCIONES DADAS
function randBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const TOTAL_POKEMONS = 898;
  
function randomPokemonIds(cantidad) {
    const pokemonIds = [];
    while (pokemonIds.length < cantidad) {
        const id = randBetween(1, TOTAL_POKEMONS)
        if (!pokemonIds.includes(id)) {
            pokemonIds.push(id);
        }
    }
    return pokemonIds;
}

//FUNCIONES NUEVAS
export function randomIndex(){
    return randBetween(0,3)
}

const getPokemonData = async(id)=>{
    // console.log(`Fetching data for Pokémon with ID ${id}...`);
    const [speciesRes, spritesRes] =await Promise.all([
        (fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`)),
        (fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`))
    ])

    // console.log(`Species response for ID ${id}:`, speciesRes); 
    // console.log(`Sprites response for ID ${id}:`, spritesRes); 
    
    const [speciesResult, spritesResult]= await Promise.all([
        (speciesRes.json()),
        (spritesRes.json())
    ])
    // console.log(`Species data for ID ${id}:`, speciesResult); 
    // console.log(`Sprites data for ID ${id}:`, spritesResult);
    
    const nombre = speciesResult.names.find(name => name.language.name === "es")?.name || "Nombre no disponible";
    // console.log("Names in speciesResult:", speciesResult.names); 
    // console.log("Nombre encontrado:", nombre); 
    
    const sprite = spritesResult.sprites.other["official-artwork"].front_default;
    // console.log("Sprites in spritesResult:", spritesResult); 
    // console.log("Sprite encontrado:", sprite);

    // console.log(`Pokémon ID ${id}:`, { nombre, sprite }); 
    return { nombre, sprite };
}

export async function fourRandomPokemon() {
    const pokemonIds = randomPokemonIds(4)
    const pokemons = []
    // console.log("Generated Pokémon IDs:", pokemonIds);
    for (const id of pokemonIds){
        try {
            // console.log(`Fetching Pokémon with ID ${id}...`);
            const pokemon = await getPokemonData(id)
            // console.log(`Pokémon fetched:`, pokemon);
            pokemons.push(pokemon)
        } catch (error) {
            throw new Error(`Error al obtener el Pokémon con ID ${id}: ${error}`) 
        }
    }
    // console.log("Pokémons fetched:", pokemons);
    return pokemons;
}

export const getSprite = createAsyncThunk(
    'getSprite',
    async function getSprite(){
        // console.log("Fetching sprite and answers...")
        const pokemons = await fourRandomPokemon();
        const index = randomIndex()
        
        return { 
            sprite: pokemons[index].sprite, 
            answers: pokemons.map(p => p.nombre), 
            correct: index
        };
    }
)


const pokemonSlice = createSlice({
    name:'pokemon',
    initialState,
    reducers:{

        setScore:(state,action)=>{
            state.score = action.payload;
        },
        setClickado:(state,action)=>{
            state.clickado = action.payload;
        }    
    },

    extraReducers(builder) {
        builder
        .addCase(getSprite.pending, (state, _action) => {
          state.loading = true
          state.error = null
        })
        .addCase(getSprite.fulfilled, (state, action) => {
          state.loading = false
          state.sprite = action.payload.sprite,
          state.answers = action.payload.answers;
          state.correct = action.payload.correct;
        })
        .addCase(getSprite.rejected, (state, action) => {
          state.loading = false
          state.error = action.error.message
        })
    }
})

export const selectScore = state => state.pokemon.score;
export const selectSprite = state => state.pokemon.sprite;
export const selectLoading = state => state.pokemon.loading;
export const selectAnswers = state => state.pokemon.answers;
export const selectCorrect = state => state.pokemon.correct;
export const selectClickado = state => state.pokemon.clickado;    


export const {
    setScore,
    setClickado
} = pokemonSlice.actions;

export default pokemonSlice.reducer;