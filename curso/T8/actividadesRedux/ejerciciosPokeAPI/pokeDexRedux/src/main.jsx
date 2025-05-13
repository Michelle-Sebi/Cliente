
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Importamos Provider de Redux
import store from "./store"; // Importamos el store de Redux
import Pokedex from "./Pokedex";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Pokedex />
  </Provider>
);
