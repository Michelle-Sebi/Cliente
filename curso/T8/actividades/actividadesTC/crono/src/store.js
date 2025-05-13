import { configureStore } from '@reduxjs/toolkit'
import crono from './cronoSlice.js'

const store = configureStore({
    reducer: {
        crono
    }
})

export default store;