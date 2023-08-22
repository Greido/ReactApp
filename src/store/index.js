import { configureStore } from "@reduxjs/toolkit";

//Slice de tasks / reducer

import taskReducer from '../features/tasks/taskSlice'


export const store = configureStore({
    reducer:{
        task:taskReducer
    },
})

