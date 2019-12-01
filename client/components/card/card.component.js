import React from 'react'
import './card.styles.scss'

//redux
import {connect} from 'react-redux'
import {createEventStartAsync, updateEventStartAsync} from '../../redux/events/events.actions'
import {toggleSetTypeAndinitData} from '../../redux/nav/nav.actions'

//Components
import Task from '../Task/Task.components'

class Card extends React.Component{
    constructor(props){
        super(props)
    }

    onHandleSubmit=(year,month,day)=>{
        console.log('hit')
        const payload = {
            Name: 'test',
            Year: year,
            Month: month,
            Day: day,
            Description: 'whatever'
        }
        this.props.createEventStartAsync(payload,month)
    }

    onDragOverHandler = (e)=>{
        e.preventDefault()
    }

    onDropHandler = (e)=>{
        e.preventDefault()
        const payload = {
            Day: this.props.day
        }
        this.props.updateEventStartAsync(Number(e.dataTransfer.getData("text/plain")),payload,this.props.month)
    }

   
   render(){
       return(
        <div className='card' onDrop={(e)=>this.onDropHandler(e)} onDragOver={(e)=>this.onDragOverHandler(e)}>
        <div className='card__num'>{this.props.day}</div>
        {
            this.props.events.map(({id,Name,Year,Month,Day,Description})=>{
                if(this.props.year===Year && this.props.month===Month && this.props.day===Day){
                    return (
                        <Task id={id} name={Name} month={Month} year={Year} day={Day} description={Description} />
                    )
                }
            })
        }
        <div className='card__add' onClick={(e)=>this.props.toggleSetTypeAndinitData({type:'add',year:this.props.year,month:this.props.month,day:this.props.day})}>+</div>
        </div>
    )
}
}

const mapDispatchToProps = dispatch =>({
    createEventStartAsync: (payload,month)=>dispatch(createEventStartAsync(payload,month)),
    updateEventStartAsync: (id,payload,month)=>dispatch(updateEventStartAsync(id,payload,month)),
    toggleSetTypeAndinitData: (type)=>dispatch(toggleSetTypeAndinitData(type))
})

const mapStateToProps = state =>({
    events: state.eventsDir.events
})

export default connect(mapStateToProps,mapDispatchToProps)(Card)
