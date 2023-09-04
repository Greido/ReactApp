export const addTask = (task) =>{
    return{
        type:'ADD_TASK',
        payload:task,
    };
};


//Upgradea 1 o 2 puntos la tarea segun le indiquemos
export const upadateTask = (taskId,newStatus) =>({
    type:'UPDATE_TASK_STATUS',
    payload:{taskId,newStatus},
});


//Resetea el formulario de las task
export const resetTask = () =>{
    return{
        type:'RESET_TASK',
    };
};




