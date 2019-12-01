import React from 'react'
import './Task.style.scss'

//Redux
import {connect} from 'react-redux'
import {toggleSetTypeAndinitData} from '../../redux/nav/nav.actions'

const Task = (props) => {
    return(
        <div className='task'>
            <div className='task__name'>
                <a onClick={(e)=>props.toggleSetTypeAndinitData({type:'update',...props})}>{props.name}</a>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleSetTypeAndinitData: obj=>dispatch(toggleSetTypeAndinitData(obj))
})

export default connect(null,mapDispatchToProps)(Task)