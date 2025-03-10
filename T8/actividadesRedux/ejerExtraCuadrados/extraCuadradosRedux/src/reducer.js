// src/reducer.js
const initialState = {
    bgColor: "white",
    size: 20,
    number: 1,
    selectColor: "red",
    filas: [],
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "SET_BG_COLOR":
        return { ...state, bgColor: action.payload };
  
      case "SET_SIZE":
        return { ...state, size: action.payload };
  
      case "SET_NUMBER":
        return { ...state, number: action.payload };
  
      case "SET_SELECT_COLOR":
        return { ...state, selectColor: action.payload };
  
      case "SET_FILAS":
        return { ...state, filas: action.payload };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  