import { configureStore} from "@reduxjs/toolkit";

//Reducers
import taskReducer from "./features/taskReducer";

const store = configureStore({
    reducer: taskReducer,
})

export default store;