
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


const initialState = {
  listaAPI: [],
  lista5:[],
//   listado:[
//     { nombre:'',
//     apellido:'' }
//   ],
  usuario:[],
  
};

const url = ('https://jsonplaceholder.typicode.com/users')

export const peticionAPI = createAsyncThunk(
    'peticionAPI',
    async (_, thunkAPI)=>{
        try{
        const response = await fetch(url)
        const data = await response.json();
        // console.log(data)
        return data
        }catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
)



const listaSlice = createSlice({
    name: 'lista',
    initialState,
    reducers: {
        
        setUsuario:(state,action)=>{
            state.usuario = action.payload;
        },
        setLista5:(state,action)=>{
            state.lista5 = action.payload;
        }
    },
    extraReducers:(builder)=>{
        builder
        
        .addCase(peticionAPI.pending, (state)=>{
            state.status = "loading";
        })
        .addCase(peticionAPI.fulfilled, (state,action)=>{
            state.status = "succeeded";
            state.listaAPI = action.payload;
            console.log("obteniendo listaAPI:",JSON.parse(JSON.stringify(state.listaAPI)))
        })
        .addCase(peticionAPI.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})        



export const {
    setUsuario,
    setLista5
} = listaSlice.actions;

export const selectUsuario = state => state.lista.usuario
export const selectListaAPI = state => state.lista.listaAPI
export const selectLista5 = state => state.lista.lista5
export default listaSlice.reducer;