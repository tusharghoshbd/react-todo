
import Type from './type'

export const addToDo = (taskName)=>{

    return {
        type:  Type.ADD_TODO,
        payload: {
            taskName: taskName
        }
    }

}

export const taskToggle =(taskId)=>{

    //console.log(taskId);
    return {
        type:  Type.TASK_STATUS_CHANGE,
        payload: {
            taskId: taskId
        }
    }
}

export const filterStatusChange = (filterStatus)=>{
    return {
        type:  Type.FILTERS,
        payload: {
            filterStatus: filterStatus
        }
    }
}