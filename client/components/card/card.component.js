import React from 'react'
import './card.styles.scss'

//redux
import {connect} from 'react-redux'
import {createEventStartAsync,deleteEventStartAsync} from '../../redux/events/events.actions'
import {toggleAndSetType} from '../../redux/nav/nav.actions'

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

   render(){
       return(
        <div class='card'>
        day {this.props.day} 
        {
            this.props.events.map(({id,Name,Year,Month,Day,Description})=>{
                if(this.props.year===Year && this.props.month===Month && this.props.day===Day){
                    return (
                        <div>
                        <a onClick={(e)=>this.props.toggleAndSetType('update')}>{Name}</a>
                        {Description}
                        </div>
                    )
                }
            })
        }
        <div onClick={(e)=>this.props.toggleAndSetType('add')}>+</div>
        </div>
    )
}
}

const mapDispatchToProps = dispatch =>({
    createEventStartAsync: (payload,month)=>dispatch(createEventStartAsync(payload,month)),
    deleteEventStartAsync: (id,month)=>dispatch(deleteEventStartAsync(id,month)),
    toggleAndSetType: (type)=>dispatch(toggleAndSetType(type))
})

const mapStateToProps = state =>({
    events: state.eventsDir.events
})

export default connect(mapStateToProps,mapDispatchToProps)(Card)

//<div onClick={(e)=>this.onHandleSubmit(this.props.year,this.props.month,this.props.day)}>+</div>
//<a onClick={(e)=>this.props.deleteEventStartAsync(id,this.props.month)}>{Name}</a>