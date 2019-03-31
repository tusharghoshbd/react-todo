
import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addToDo} from './../store/actions/todoActons'


class CreateTask extends Component{

    constructor(props){
        super(props)
        this.state = {
            task_name: ''
        }

        this.changeHandler = this.changeHandler.bind(this);
        this.clickHandler = this.clickHandler.bind(this);

    }

    changeHandler = (e)=>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    clickHandler = (e)=>{

        this.props.addToDo(this.state.task_name);

        this.setState({
            task_name: ''
        })
        
    }

    

    render(){
        return(
            <div>
                <input type="text" name="task_name"  onChange={this.changeHandler} value={this.state.task_name}/>
                <button  onClick={this.clickHandler}>ADD</button>
            </div>
        )
    }

}

// const mapStateToPrps=(state)=>{
//     return {
//        // todoList: state.todo.todoList
//     }
// }

const mapDispatchToPrps= (dispatch)=>{
    return {
        addToDo : (taskName) =>{
            //dispatch(addToDo(taskName))
            dispatch( {
                type: 'ADD_TODO',
                payload: {
                    taskName
                }
            })           
        }
    }     
}

// const mapDispatchToPrps= {

//     addToDo 
// }

export default connect(null, mapDispatchToPrps) (CreateTask);