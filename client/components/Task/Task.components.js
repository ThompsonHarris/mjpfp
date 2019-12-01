import React from 'react'
import './Task.style.scss'

//Redux
import {connect} from 'react-redux'
import {toggleAndSetType} from '../../redux/nav/nav.actions'

const Task = (props) => {
    return(
        <div className='task'>
            <div className='task__name'>
                <a onClick={(e)=>props.toggleAndSetType('update')}>{props.name}</a>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleAndSetType: type=>dispatch(toggleAndSetType(type))
})

export default connect(null,mapDispatchToProps)(Task)