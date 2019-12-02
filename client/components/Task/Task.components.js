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
            <>
            {
                this.props.Completion===true?
                <div className='taskComplete'>
                <div className='task__name' onClick={(e)=>this.props.toggleSetTypeAndinitData({type:'update',...this.props})} >
                    {this.props.name}
                </div>
                </div>
                :
                <div className={this.props.past===true?'taskPast':'task'}>
                <div className='task__name' draggable="true" onDragStart={(e)=>{this.onDragStartHandler(e)}} onClick={(e)=>this.props.toggleSetTypeAndinitData({type:'update',...this.props})} >
                    {this.props.name}
                </div>
                </div>
            }
            </>
        )
    }
}


const mapDispatchToProps = dispatch => ({
    toggleSetTypeAndinitData: obj=>dispatch(toggleSetTypeAndinitData(obj))
})

export default connect(null,mapDispatchToProps)(Task)

