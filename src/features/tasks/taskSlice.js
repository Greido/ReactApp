import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
    
    name:'tasks',
    initialState:[],
    reducers:{
        
    }
})


//Debo exportar el reducer de este slice

export default taskSlice.reducer