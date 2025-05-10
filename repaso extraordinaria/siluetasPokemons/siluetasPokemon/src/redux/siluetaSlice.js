import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { randomPokemonIds } from '../pokemon';

const server = 'https://pokeapi.co/api/v2/pokemon'

const initialState = {

  infoPokemons:[],  
  repuestas: [],
  imagen: '',
  respuestaCorrecta: '',
  indiceCorrecto: 0,
  respuestaSeleccionada:'',
  respondido: false,
  correcto: false,
  puntuacion:0, 
  loading:false,
  error:null
};



async function fetchURL(url) {
    const respuesta = await fetch(url)
    if (!respuesta.ok) {
        throw new Error(`HTTP error! estatus : ${respuesta.status}`)
    }
    return respuesta.json()
}

export const peticionInfoPokemon = createAsyncThunk(
    'peticionInfoPokemon',
    async function () {
        const pokemonIds = randomPokemonIds(4)
        
        const indiceCorrecto = Math.floor(Math.random()* 4)

        const promesas = pokemonIds.map(async id =>{
            const peticion = await fetchURL(`${server}/${id}`);
            const nombre = peticion.name
            const sprite = peticion.sprites.other["official-artwork"].front_default
            return {nombre: nombre, sprite: sprite }
        })

        const infoPokemons = await Promise.all(promesas)
        
        const respuesta = {infoPokemons, indiceCorrecto}
        console.log(respuesta)
        return respuesta
    }
)

const siluetaSlice = createSlice({
    name: 'silueta',
    initialState,
    reducers: {
        setPuntuacion:(state,action)=>{
            state.puntuacion = action.payload;
        },
        setRespuestaSeleccionada:(state,action)=>{
            state.respuestaSeleccionada = action.payload;
        },
        setRespondido: (state,action)=>{
            state.respondido = action.payload;
        },
        setCorrecto: (state,action)=>{
            state.correcto = action.payload;
        },
    },
    extraReducers(builder){
        builder
        .addCase(peticionInfoPokemon.pending, (state, _action) => {
            state.loading = true
            state.error = null
        })
        .addCase(peticionInfoPokemon.fulfilled, (state, action) => {
            state.loading = false
            state.infoPokemons = action.payload.infoPokemons
            console.log(state.infoPokemons)
            state.indiceCorrecto = action.payload.indiceCorrecto
            console.log('indice',state.indiceCorrecto)
            // state.respuestas = 
            state.respuestaCorrecta = state.infoPokemons[state.indiceCorrecto].nombre
            console.log(state.respuestaCorrecta)
            state.imagen = state.infoPokemons[state.indiceCorrecto].sprite
            console.log('imagen', state.imagen)
        })
        .addCase(peticionInfoPokemon.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
    }
})

export const {
    setPuntuacion,
    setRespondido,
    setRespuestaSeleccionada,
    setCorrecto
} = siluetaSlice.actions;

export const selectPuntuacion = state => state.silueta.puntuacion
export const selectInfoPokemons = state => state.silueta.infoPokemons
export const selectRespuestaSeleccionada = state => state.silueta.respuestaSeleccionada
export const selectRespondido = state => state.silueta.respondido
export const selectRespuestaCorrecta = state => state.silueta.respuestaCorrecta
export const selectImagen = state => state.silueta.imagen
export const selectLoading = state => state.silueta.loading
export const selectCorrecto = state => state.silueta.correcto

export default siluetaSlice.reducer;
