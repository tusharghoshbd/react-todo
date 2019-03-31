import React, {Component} from 'react'
import {connect} from 'react-redux'

import {filterStatusChange} from './../store/actions/todoActons'

class Filters extends Component{
    constructor(props){
        super(props);
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler = (filterStatus)=>{
        this.props.filterStatusChange(filterStatus);
    }

    render (){

        return (
            <div>
                <button onClick={ ()=>this.clickHandler('all')  }>All</button> 
                <button onClick={ ()=>this.clickHandler('completed')  }>Completed</button> 
                <button onClick={ ()=>this.clickHandler('pending')  }>Pending</button>
            </div>
        )
    }
}

const mapStateToPrps=(state)=>{

    return {
        
    }
}

const mapDispatchToPrps={
    filterStatusChange : (filterStatus) => filterStatusChange(filterStatus)
}


export default connect(mapStateToPrps, mapDispatchToPrps) (Filters);