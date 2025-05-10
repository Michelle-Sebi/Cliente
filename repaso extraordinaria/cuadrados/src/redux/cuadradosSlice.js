import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const coloresDisponibles = ['#FF6B6B', '#FFD93D', '#6BCB77', '#4D96FF', '#845EC2', '#FFC75F', '#F9F871']

const coloresAleatorios = [...coloresDisponibles]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

const initialState = {
    colores: coloresAleatorios,
};

async function delay(ms) {
    return new Promise( (resolve) => {
        setTimeout(resolve(),ms)
    })
}

async function giroAsincrono(direccion, colores) {
    let nuevosColores = [...colores]
    await delay(2000)
    if (direccion === 'izquierda') {
        const primero = nuevosColores.shift()
        nuevosColores.push(primero)
    } else {
        const ultimo = nuevosColores.pop()
        nuevosColores.unshift(ultimo)
    }
    return nuevosColores
}

export const girar = createAsyncThunk(
    'girar',
    async function girar(direccion, { getState }) {
        const colores = getState().cuadrados.colores
        console.log(colores)
        return giroAsincrono(direccion, colores)
    }
)

const cuadradosSlice = createSlice({
    name: 'cuadrados',
    initialState,
    extraReducers(builder) {
        builder
        .addCase(girar.pending, ( _action) => {
        })
        .addCase(girar.fulfilled, (state, action) => {
            state.colores = action.payload
        })
        .addCase(girar.rejected, () => {
        })
    }

})

export const selectColores = state => state.cuadrados.colores
export default cuadradosSlice.reducer;
