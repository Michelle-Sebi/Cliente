import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  mensajeActual: '',  
  mostrar: false,
  conversacion:[],
  chats:[]
};

const urlChats = ('https://examen-extraordinaria-server.fly.dev/chats')
const urlIA = ('http://localhost:5000/chat/completions')

// ('https://examen-extraordinaria-server.fly.dev//chat/completions)


async function peticionServidor(url, metodo, body = null){
    const opciones = {
        method: metodo,
        headers: {"Content-Type":"application/json"}
    }
    if (body) opciones.body = JSON.stringify(body)
    const response = await fetch(url,opciones)
    const data = await response.json();
    // console.log(data)
    return data
}

export const peticionServidorChats = createAsyncThunk(
    "peticionServidorChats",
    async (_, thunkAPI) => {
        try {
          return await peticionServidor(urlChats, "GET");
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }
    }
)

export const peticionServidorIA = createAsyncThunk(
    "peticionServidorIA",
    async (_, thunkAPI) => {
        try {
          const state = thunkAPI.getState();  // ✅ Obtiene el estado actual de Redux
          const peticionIA = {
            "messages": state.chat.conversacion  // ✅ Usa la conversacion actual
          };
          console.log("Conversación a enviar:", JSON.stringify(state.chat.conversacion));
        //   const peticionIAJson = JSON.stringify(peticionIA)
          return await peticionServidor(urlIA, 'POST', peticionIA);
        } catch (error) {
          return thunkAPI.rejectWithValue(error.message);
        }

    }
);


const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        setMostrar:(state,action)=>{
                state.mostrar = action.payload;
        },
        setMensajeActual:(state,action)=>{
            state.mensajeActual = action.payload;
        },
        agregarMensajeActual:(state,action)=>{
            const {nuevoRole, nuevoContent}=action.payload
            state.conversacion = [...state.conversacion,
                {role:nuevoRole, content:nuevoContent}
            ]
            console.log("Todas las preguntas:", JSON.parse(JSON.stringify(state.conversacion)));
        }
    },
    extraReducers:(builder)=>{
        builder
        //PETICION DE CHATS
        .addCase(peticionServidorChats.pending, (state)=>{
            state.status = "loading";
        })
        .addCase(peticionServidorChats.fulfilled, (state,action)=>{
            state.status = "succeeded";
            state.chats = action.payload;
            // console.log("obteniendo chats:",JSON.parse(JSON.stringify(state.chats)))
        })
        .addCase(peticionServidorChats.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })

        //PETICION A LA IA
        .addCase(peticionServidorIA.pending, (state)=>{
            state.status = "loading";
        })
        .addCase(peticionServidorIA.fulfilled, (state,action)=>{
            state.status = "succeeded"
            const mensaje = action.payload
            console.log("mensaje:", mensaje)
            const {nuevoRole, nuevoContent}= {nuevoRole:"assistant", nuevoContent:mensaje.message || mensaje.content}
            state.conversacion = [...state.conversacion,
                {role:nuevoRole, content:nuevoContent}
            ]
            // console.log("Todas las respuestas:", JSON.parse(JSON.stringify(state.conversacion)));
        })
        .addCase(peticionServidorIA.rejected, (state, action)=>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export const {
    setMostrar,
    setMensajeActual,
    agregarMensajeActual
} = chatSlice.actions;

export const selectMostrar = state => state.chat.mostrar
export const selectConversacion = state => state.chat.conversacion
export const selectMensajeActual = state => state.chat.mensajeActual
export const selectChats = state => state.chat.chats
export default chatSlice.reducer;
