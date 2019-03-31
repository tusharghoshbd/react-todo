
import  Type from '../actions/type'

const initialState = {

    todoList :[],
    filterStatus : 'all'  // all/completed/pending
}

 const  todoReducer = (state = initialState, action) =>{
   
    switch (action.type) {
        case Type.ADD_TODO:{
            
            let taskObj = {
                id: new Date().getTime(),
                name: action.payload.taskName,
                status: 'pending'
            }    
            let todoList =  JSON.parse( JSON.stringify(state.todoList ) );
            todoList.push(taskObj);
            let obj ={
                ...state,                
                // todoList: [ 
                //     ...state.todoList,
                //     {
                //         name: action.payload.taskName,
                //         status: 'pending'
                //     }
                // ],
                todoList:todoList
                //todoList : todoList
            }
            return obj;
        }    
        case Type.TASK_STATUS_CHANGE :{

            let todoList =  JSON.parse( JSON.stringify(state.todoList ) );
            for(let i =0; i< todoList.length; i++){
                if(todoList[i].id === action.payload.taskId){
                    todoList[i].status = (todoList[i].status === 'pending' ? 'completed': 'pending');
                    break;
                }
            }
            return {
                ...state, 
                todoList:todoList
            }
        }
        case Type.FILTERS :{
            return {
                ...state, 
                filterStatus: action.payload.filterStatus
            }
        }
        default:
            return state;
    }
}

export default todoReducer;