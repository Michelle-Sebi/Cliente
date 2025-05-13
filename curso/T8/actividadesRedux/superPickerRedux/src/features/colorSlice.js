import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hue: 0,
    saturation: 0,
    steps: 5
};

const colorSlice = createSlice({
    name: 'color',
    initialState,
    reducers:{
        setHue:(state,action)=>{
            state.hue = action.payload;
        },
        setSaturation:(state,action)=>{
            state.saturation = action.payload;
        },
        setSteps:(state,action)=>{
            state.steps = action.payload;
        }
    }
})

export const {setHue, setSaturation, setSteps} = colorSlice.actions;
export default colorSlice.reducer;
