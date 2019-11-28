import React from 'react'
import './calendar.styles.scss'

//Redux
import {connect} from 'react-redux'
import {backOneMonthThenSet,addOneMonthThenSet} from '../../redux/date/date.actions'

//component
import Card from '../card/card.component'

class Calendar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div class='calendar'>
                <a onClick={()=>this.props.backOneMonthThenSet(this.props.currentDate)}> + </a>
                {this.props.month}
                <a onClick={()=>this.props.addOneMonthThenSet(this.props.currentDate)}> + </a>
                {
                    new Array(this.props.num).fill(0).map((val,idx)=>{
                        return(
                            <Card day={idx}/>
                        )
                    })
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    backOneMonthThenSet: dateObj => dispatch(backOneMonthThenSet(dateObj)),
    addOneMonthThenSet: dateObj => dispatch(addOneMonthThenSet(dateObj))
})

const mapStateToProps = state => ({
    currentDate: state.date.current,
    num: state.date.daysNum, 
    month: state.date.curMonth

})

export default connect(mapStateToProps,mapDispatchToProps)(Calendar)