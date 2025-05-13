import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {fetch} from '../fakeFetch.js'

const initialState = {
  ciudad: '',
  unidadTemperatura: '',
  climaActual: [],
  prediccion:[],
  favoritas:[],
  clickado:false,
};
const apiKey = 'superduperdupersuper';
const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

const fetchWeatherData = (ciudad, unidadTemperatura) => {
    const city = ciudad
    const unit = unidadTemperatura
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    return fetchData(url);
};

const fetchForecastData = (ciudad, unidadTemperatura) => {
    const city = ciudad
    const unit = unidadTemperatura
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`;
    return fetchData(url);
};

export const peticionClima = createAsyncThunk(
    'peticionClima',
    async function(ciudad, unidadTemperatura){
        const infoPrediccion = await fetchForecastData(ciudad, unidadTemperatura)
        const infoClima = await fetchWeatherData(ciudad, unidadTemperatura)

        return {climaActual:infoClima, prediccion:infoPrediccion}
    }
)

const climaSlice = createSlice({
  name: 'clima',
  initialState,
  reducers: {
    setCiudad:(state,action)=>{
        state.ciudad = action.payload;
    },
    setUnidadTemperatura:(state,action)=>{
        state.unidadTemperatura = action.payload;
        console.log(state.unidadTemperatura)
    },
    setFavoritas:(state,action)=>{
        state.favoritas = action.payload;
    },
    setClickado:(state,action)=>{
        state.clickado = action.payload;
    },
    setListaPrediccion:(state,action)=>{
        state.listaPrediccion = action.payload;
    },
  },
  extraReducers(builder){
    builder
    .addCase(peticionClima.pending, (state) => {
        state.loading = true
        state.error = null
    })
    .addCase(peticionClima.fulfilled, (state, action) => {
        state.loading = false
        state.climaActual = action.payload.climaActual
        console.log('clima', state.climaActual)
        state.prediccion = action.payload.prediccion
        console.log('prediccion',state.prediccion)
    })
    .addCase(peticionClima.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
}

})

export const {
    setCiudad,
    setUnidadTemperatura,
    setFavoritas,
    setClickado,
    setListaPrediccion
} = climaSlice.actions;
export const selectCiudad = state => state.clima.ciudad
export const selectUnidadTemperatura = state => state.clima.unidadTemperatura
export const selectFavoritas = state => state.clima.favoritas
export const selectClima = state => state.clima.climaActual
export const selectPrediccion = state => state.clima.prediccion
export const selectClickado = state => state.clima.clickado

export default climaSlice.reducer;