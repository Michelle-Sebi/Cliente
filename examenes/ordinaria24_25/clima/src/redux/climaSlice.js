import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
    fetch
} from '../componentes/fakeFetch'    
    

const initialState = {
  datos: [],
  unidad:'',
  ciudad:'',
  favoritas:[],
  clickado: false
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

const fetchWeatherData = (city, unit) => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`;
    return fetchData(url);
};

const fetchForecastData = (city, unit) => {
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`;
    return fetchData(url);
};

export const buscarClima = createAsyncThunk(
    'buscarClima',
    async (ciudad, unidad) => {
        const city = {ciudad};
        if (city === '') return;
    
        const unit = {unidad};
    
        // Realiza ambas peticiones en paralelo
        try {
            const [weatherData, forecastData] = await Promise.all([
                fetchWeatherData(city, unit),  // Obtiene el clima actual
                fetchForecastData(city, unit)   // Obtiene la predicción
            ]);

            const clima = weatherData
            const prediccion = forecastData
    
            // Muestra los resultados
        return {clima,prediccion}
    
        } catch (error) {
            console.error("Error al obtener los datos del clima:", error);
        }
    }
)  

const climaSlice = createSlice({
  name: 'clima',
  initialState,
  reducers: {
    setUnidad:(state,action)=>{
        state.unidad = action.payload;
    },
    setCiudad:(state,action)=>{
        state.ciudad = action.payload;
    },
    setFavoritas:(state,action)=>{
        state.favoritas = action.payload;
    },
    setClickado:(state,action)=>{
        state.clickado = action.payload;
    }
  },
    extraReducers:(builder)=>{
        builder
        
        .addCase(buscarClima.pending, (state)=>{
            state.status = "loading";
        })
        .addCase(buscarClima.fulfilled, (state,action)=>{
            state.status = "succeeded";
            state.datos = action.payload;
            // console.log("obteniendo datos:",JSON.parse(JSON.stringify(state.datos)))
        })
        .addCase(buscarClima.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export const {
    setUnidad,
    setCiudad,
    setFavoritas,
    setClickado
} = climaSlice.actions;

export const selectUnidad = state => state.clima.unidad
export const selectCiudad = state => state.clima.ciudad
export const selectFavoritas = state => state.clima.favoritas
export const selectDatos = state => state.clima.datos
export const selectClickado = state => state.clima.clickado
export default climaSlice.reducer;