import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchCandidatos = createAsyncThunk(
    "misTrabajadores/fetchCandidatos",
    async () => {
        const response = await fetch('https://randomuser.me/api/?results=6');
        const data = await response.json();
        return data.results;
    }
)

export const fetchUnCandidato = createAsyncThunk(
    "misTrabajadores/fetchUnCandidato",
    async (indice, {getState}) => {
        const response = await fetch('https://randomuser.me/api/?results=1');
        const data = await response.json();
        const candidatoNuevo = data.results[0];

        const state = getState().misTrabajadores;
        const candidatosActualizados = [...state.candidatos];
        candidatosActualizados[indice] = candidatoNuevo;

        return candidatosActualizados;
    }
)

export const miSlice= createSlice({
    name:'misTrabajadores',
    initialState:{
        candidatos: [],
        trabajadores: [],
        status: "idle", // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null
    },
    reducers:{
        agregarUnValor:(state,action)=>{
            state.trabajadores.push(action.payload);
            // state.trabajadores=[...state.trabajadores,action.payload]
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCandidatos.pending, (state)=>{
            state.status = "loading";
        })
        .addCase(fetchCandidatos.fulfilled, (state,action)=>{
            state.status = "succeeded";
            state.candidatos = action.payload;
        })
        .addCase(fetchCandidatos.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
        .addCase(fetchUnCandidato.fulfilled, (state, action)=>{
            state.candidatos = action.payload
        })
    }
})



export const departamentosSlice= createSlice({
    name:'misDepartamentos',
    initialState:{
        trabajadores:[]
    },
    reducers:{
        
    }
})

export const {agregarUnValor} = miSlice.actions