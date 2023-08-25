import { configureStore} from "@reduxjs/toolkit";

//Reducers
import taskReducer from "./features/taskReducer";
import pokeReducer from "./features/pokeReducer"
const store = configureStore({
    reducer: {
        tasks:taskReducer,
        pokemons:pokeReducer
        
    }
})

export default store;