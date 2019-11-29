import React from 'react'
import './card.styles.scss'

//redux
import {connect} from 'react-redux'
import {createEventStartAsync} from '../../redux/events/events.actions'

class Card extends React.Component{
    constructor(props){
        super(props)
    }

    onHandleSubmit=(val)=>{
        console.log('hit')
        const payload = {
            Name: 'test',
            Year: 2019,
            Month: 11,
            Day: val,
            Description: 'whatever'
        }
        this.props.createEventStartAsync(payload)
    }

   render(){
       const {day,selected} = this.props
       return(
        selected==='true'?
        <div class='card'> day {day+1} - I'm special </div>
        :
        <div class='card'> day {day+1} <div onClick={()=>{this.onHandleSubmit(day+1)}}>+</div></div> 
    )
}
}

const mapDispatchToProps = dispatch =>({
    createEventStartAsync: (payload)=>dispatch(createEventStartAsync(payload))
})

export default connect(null,mapDispatchToProps)(Card)