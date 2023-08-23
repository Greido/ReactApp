
const initialState = {
    taskList:[],
};

const taskReducer = (state = initialState,action)=>{
    switch (action.type){
        case 'ADD_TASK':
        return{
            ...state,
            taskList:[action.payload,...state.taskList],
        };
        case 'RESET_TASK':
            return{
                ...state,
                taskList:[],
            }
        default:
            return state;
    }    
}
//conflicto interno borrar esta linea
export default taskReducer
