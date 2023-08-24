import { configureStore} from "@reduxjs/toolkit";

//Reducers
import taskReducer from "./features/taskReducer";
import pokeReducer from "./features/pokeReducer"
const store = configureStore({
    reducer: {
        taskReducer,
        pokeReducer
        
    }
})

export default store;