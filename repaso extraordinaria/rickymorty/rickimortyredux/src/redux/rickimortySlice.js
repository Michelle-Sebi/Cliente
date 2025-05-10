import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  personaje: '',
  url: 'https://rickandmortyapi.com/api/character/?name=',
  info: [],
  results:[],
  infoEpisodios:[],
  loadingPersonajes: false,
  loadingEpisodios: false,
  error: null
};

export const obtenerDatos = createAsyncThunk(
    'obtener datos',
    async function obtenerDatos(url){
        const respuesta = await fetch(url)
        if(!respuesta.ok){
            throw new Error (`HTTP error! estatus : ${respuesta.status}`)
        }
        const datos = await respuesta.json()
        const resultado = datos.results
        const tresResultados = resultado.slice(0,3)
        
        return{
            results:tresResultados,
            info: datos.info
        }
    }
)

export const obtenerInfoEpisodios = createAsyncThunk(
    'obtenerInfoEpisodios',
    async function obtenerInfoEpisodios(urlsEpisodios){
        if(!urlsEpisodios)return
        const promesas =urlsEpisodios.map(async url=>{
            const res = await fetch(url)
            if(!res.ok){
                throw new Error(`Error en el fetch de episodios: ${res.status}`)
            }
            return res.json()
        })
        const datosEpisodios = await Promise.all(promesas)
        return datosEpisodios;
    }
)

const rickimortySlice = createSlice({
    name: 'rickimorty',
    initialState,
    reducers: {
        setPersonaje:(state,action)=>{
            state.personaje = action.payload;
        },
        setUrl:(state,action)=>{
            state.url = action.payload;
        },

    },
    extraReducers(builder) {
        builder
        //DATOS DEL PERSONAJE
        .addCase(obtenerDatos.pending, (state, _action) => {
            state.loadingPersonajes = true
            state.error = null
        })
        .addCase(obtenerDatos.fulfilled, (state, action) => {
            state.loadingPersonajes = false
            state.info = action.payload.info,
            state.results = action.payload.results;
        })
        .addCase(obtenerDatos.rejected, (state, action) => {
            state.loadingPersonajes = false
            state.error = action.error.message
        })
        //DATOS DEL EPISODIO
        .addCase(obtenerInfoEpisodios.pending, (state, _action) => {
            state.loadingEpisodios = true
            state.error = null
        })
        .addCase(obtenerInfoEpisodios.fulfilled, (state, action) => {
            state.loadingEpisodios = false
            state.infoEpisodios = action.payload
            
        })
        .addCase(obtenerInfoEpisodios.rejected, (state, action) => {
            state.loadingEpisodios = false
            state.error = action.error.message
        })
    }    
})

export const {
    setPersonaje,
    setUrl
} = rickimortySlice.actions;
export const selectPersonaje = state => state.rickimorty.personaje
export const selectUrl = state => state.rickimorty.url
export const selectResults = state => state.rickimorty.results
export const selectInfo = state => state.rickimorty.info
export const selectInfoEpisodios = state => state.rickimorty.infoEpisodios
export const selectLoadingPersonajes = state => state.rickimorty.loadingPersonajes
export const selectLoadingEpisodios = state => state.rickimorty.loadingEpisodios
export default rickimortySlice.reducer;
