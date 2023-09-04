    const initialState = {
        taskList: [],
    };
    
    // Acción para agregar una tarea
    const taskReducer = (state = initialState, action) => {
        switch (action.type) {
        case 'ADD_TASK':
            return {
            ...state,
            taskList: [action.payload, ...state.taskList],
            };
    
        case 'INCREMENT_PROGRESS':
            const updatedTaskList = state.taskList.map((task) => {
            if (task.id === action.payload.taskId) {
                return {
                ...task,
                completado: task.completado + 1,
                };
            }
            return task;
            });
    
            return {
            ...state,
            taskList: updatedTaskList,
            };
    
        // Acción para resetear las tareas
        case 'RESET_TASK':
            return {
            ...state,
            taskList: [],
            };
    
        default:
            return state;
        }
    };
    
    export const updateTaskList = (taskId, increment) => {
        return {
        type: 'INCREMENT_PROGRESS',
        payload: { taskId, increment },
        };
    };
    
    export default taskReducer;
  