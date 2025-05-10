import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const SERVER = 'https://rickandmortyapi.com/api'
const URL_BUSCAR = `${SERVER}/character/?name=`

const initialState = {
    personaje: '',
    personajes: [],
    next: null,
    prev: null,
    //   url: 'https://rickandmortyapi.com/api/character/?name=',
    //   info: [],
    //   results:[],
    //   infoEpisodios:[],
    loading: false,
    error: null
};

async function fetchURL(url) {
    const respuesta = await fetch(url)
    if (!respuesta.ok) {
        throw new Error(`HTTP error! estatus : ${respuesta.status}`)
    }
    return respuesta.json()
}


export const buscar = createAsyncThunk(
    'buscar',
    async function (nombre) {
      const url = `${URL_BUSCAR}${nombre}`;
      const datos = await fetchURL(url);
  
      if (!datos || !datos.results || !datos.info) {
        throw new Error('Datos inválidos');
      }
  
      const respuesta = {
        next: datos.info.next,
        prev: datos.info.prev,
        personajes: [],
      };
  
      for (const personaje of datos.results) {
        const promesas = personaje.episode.map(async (url) => {
          const episode = await fetchURL(url);
          return episode.episode;
        });
  
        const datosEpisodios = Promise.all(promesas);
  
        respuesta.personajes.push({
          name: personaje.name,
          status: personaje.status,
          species: personaje.species,
          image: personaje.image,
          episodes: datosEpisodios,
        });
      }
  
      return respuesta;
    }
);
  
const rickimortySlice = createSlice({
    name: 'rickimorty',
    initialState,
    reducers: {
        setPersonaje: (state, action) => {
            state.personaje = action.payload;
        }
    },
    extraReducers(builder) {
        builder
        
        .addCase(buscar.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(buscar.fulfilled, (state, action) => {
            state.loading = false
            state.personajes = action.payload.personajes
            state.next = action.payload.next
            state.prev = action.payload.prev
        })
        .addCase(buscar.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
        })
        
    }
})

export const {
    setPersonaje,
} = rickimortySlice.actions;
   
export const selectPersonaje = state => state.rickimorty.personaje
export const selectPersonajes = state => state.rickimorty.personajes
export const selectInfoEpisodios = state => state.rickimorty.infoEpisodios
export const selectLoading = state => state.rickimorty.loading
export const selectNext = state => state.rickimorty.next
export const selectPrev = state => state.rickimorty.prev
export default rickimortySlice.reducer;
