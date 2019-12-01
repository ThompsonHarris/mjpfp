import React from 'react'
import './Task.style.scss'

//Redux
import {connect} from 'react-redux'
import {toggleSetTypeAndinitData} from '../../redux/nav/nav.actions'

class Task extends React.Component{

    onDragStartHandler = (e)=>{
        e.dataTransfer.setData("text/plain",this.props.id);
    }

    render(){
        return(
            <div className='task'>
                <div className='task__name' draggable="true" onDragStart={(e)=>{this.onDragStartHandler(e)}} onClick={(e)=>this.props.toggleSetTypeAndinitData({type:'update',...this.props})} >
                    {this.props.name}
                </div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    toggleSetTypeAndinitData: obj=>dispatch(toggleSetTypeAndinitData(obj))
})

export default connect(null,mapDispatchToProps)(Task)

