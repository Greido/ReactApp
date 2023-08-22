export const addTask = (task) =>{
    return{
        type:'ADD_TASK',
        payload:task,
    };
};

export const resetTask = () =>{
    return{
        type:'RESET_TASK',
    };
};

