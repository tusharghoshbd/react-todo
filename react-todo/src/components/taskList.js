import React, {Component} from 'react'
import Task from './task'
import {connect} from 'react-redux'


class TaskList extends Component {

   

    render(){
        
        let taskList =[];

        for(let i =0; i<  this.props.todoList.length; i++){

            let task = this.props.todoList[i] ;
            if(this.props.filterStatus !== 'all'){
                if(task.status ===  this.props.filterStatus)
                    taskList.push(<Task key={i} task={task} />);
            }
            else {
                taskList.push(<Task key={i} task={task} />);
            }

        }
            

        return (
            <div>                
                <ol>
                    {taskList}                    
                </ol>
            </div>
        )
    }
}


const mapStateToPrps=(state)=>{

    return {
        todoList: state.todo.todoList,
        filterStatus: state.todo.filterStatus
    }
}
//const mapDispatchToPrps={}

export default connect(mapStateToPrps) (TaskList);