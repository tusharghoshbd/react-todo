import React, {Component} from 'react'
import {connect} from 'react-redux'

import {taskToggle} from './../store/actions/todoActons'

class Task extends Component {

    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = (id)=>{
        this.props.taskToggle(id);
    }


    render(){
        return (
            <li style={{textDecoration: this.props.task.status === 'completed'? 'line-through' : 'none'}} 
                onClick={ ()=>this.clickHandler(this.props.task.id)  } >
                {this.props.task.name}
            </li>
        )
    }
}

const mapStateToPrps=(state)=>{

    return {
        
    }
}

//it will also work
// const mapDispatchToPrps= (dispatch)=>{
//     return {
//         taskToggle : (taskId) =>{
//             dispatch(taskToggle(taskId))           
//         }
//     }     
// }

const mapDispatchToPrps={
    taskToggle : (taskId) => taskToggle(taskId)
}


export default connect(mapStateToPrps, mapDispatchToPrps) (Task);