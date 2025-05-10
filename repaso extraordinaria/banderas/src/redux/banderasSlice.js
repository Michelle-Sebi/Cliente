import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const server = 'https://restcountries.com/v3.1/all?fields=name,flags'

const initialState = {
    infoBanderas: [],  
    puntuacion: 0,
    imagen: 'null',
    respuestas: [],
    respuestaCorrecta:'',
    respuestaSeleccionada:'',
    respondido:false
};



async function fetchURL(url) {
    const respuesta = await fetch(url)
    if (!respuesta.ok) {
        throw new Error(`HTTP error! estatus : ${respuesta.status}`)
    }
    return respuesta.json()
}


export const peticionInfoBanderas = createAsyncThunk(
    'peticionInfoBanderas',
    async function () {
        const respuesta = await fetchURL(server)
        const infoBanderas = respuesta.map((pais) =>{
            const nombre = pais.name.common
            const flag = pais.flags.png
            return { nombre: nombre, bandera: flag}
        })
        
        const infoCuatroBanderas = [...infoBanderas]
        .sort(() => 0.5 - Math.random())
        .slice(0, 4);

        const respuestas = infoCuatroBanderas.map(pais =>
           pais.nombre 
        )

        return {infoCuatroBanderas, respuestas}
    }
)

const banderasSlice = createSlice({
  name: 'banderas',
  initialState,
  reducers: {
    setPuntuacion:(state,action)=>{
        state.puntuacion = action.payload;
    },
    setRespuestaCorrecta:(state,action)=>{
        state.respuestaCorrecta = action.payload;
    },
    setRespuestaSeleccionada:(state,action)=>{
        state.respuestaSeleccionada = action.payload;
    },
    setRespondido:(state,action)=>{
        state.respondido = action.payload;
    },
  },
  extraReducers(builder){
    builder
    .addCase(peticionInfoBanderas.pending, (state, _action) => {
        state.loading = true
        state.error = null
    })
    .addCase(peticionInfoBanderas.fulfilled, (state, action) => {
        let indiceCorrecto = Math.floor(Math.random()* 4)
        state.loading = false
        state.infoBanderas = action.payload.infoCuatroBanderas
        console.log(state.infoBanderas) 
        state.respuestaCorrecta = state.infoBanderas[indiceCorrecto].nombre
        console.log(state.respuestaCorrecta)
        state.imagen = state.infoBanderas[indiceCorrecto].bandera
        console.log('imagen', state.imagen)
        state.respuestas = action.payload.respuestas
        console.log('respuestas', state.respuestas)
    })
    .addCase(peticionInfoBanderas.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
    })
}

})

export const {
    setPuntuacion,
    setRespondido,
    setRespuestaCorrecta,
    setRespuestaSeleccionada
} = banderasSlice.actions;
export const selectPuntuacion = state => state.banderas.puntuacion
export const selectImagen = state => state.banderas.imagen
export const selectRespuestas = state => state.banderas.respuestas
export const selectRespuestaCorrecta = state => state.banderas.respuestaCorrecta
export const selectRespuestaSeleccionada = state => state.banderas.respuestaSeleccionada
export const selectRespondido = state => state.banderas.respondido

export default banderasSlice.reducer;
