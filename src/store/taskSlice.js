import { createSlice } from "@reduxjs/toolkit";



const taskSlice = createSlice({
    name:"task",
    initialState: [], // el estado incial 
    reducers:{

        //Ejemplo para agregar una tarea 

        addTask:(state,action) =>{
            state.push(action.payload) //Agregar la tarea al state
        },
        removeTask:(state,action)=>{
        
            // Filtrar las tareas y eliminar la tarea con el ID proporcionado en action.payload

            return state.filter(task => task.id !== action.payload)

        }
    }
})


export const {addTask,removeTask} = taskSlice.actions;
export default taskSlice.reducer;