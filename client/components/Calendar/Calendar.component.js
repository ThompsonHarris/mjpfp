import React from 'react'
import './calendar.styles.scss'

//Redux
import {connect} from 'react-redux'
import {backOneMonthThenSet,addOneMonthThenSet,callCurrentThenSet} from '../../redux/date/date.actions'
import {fetchMonthEventStartAsnyc,fetchAllEventStartAsnyc} from '../../redux/events/events.actions'

//component
import Card from '../card/card.component'

class Calendar extends React.Component{
    constructor(props){
        super(props)
    }

    async componentDidMount(){
        await this.props.callCurrentThenSet()
        await this.props.fetchMonthEventStartAsnyc(this.props.month)
    }

    componentDidUpdate(prevProps){
        if ( this.props.month !== prevProps.month ) {
            this.props.fetchMonthEventStartAsnyc(this.props.month)
        }
    }

    render(){
        return(
            <div class='calendar'>
                <a onClick={()=>this.props.backOneMonthThenSet(this.props.currentDate)}> + </a>
                {this.props.month}
                <a onClick={()=>this.props.addOneMonthThenSet(this.props.currentDate)}> + </a>
                {
                    new Array(this.props.num).fill(0).map((val,idx)=>{
                            return (
                                <Card year={this.props.year} month={this.props.month} day={idx+1}/>
                            )
                        }   
                    )
                }
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    callCurrentThenSet: () => dispatch(callCurrentThenSet()),
    backOneMonthThenSet: dateObj => dispatch(backOneMonthThenSet(dateObj)),
    addOneMonthThenSet: dateObj => dispatch(addOneMonthThenSet(dateObj)),
    fetchMonthEventStartAsnyc: id => dispatch(fetchMonthEventStartAsnyc(id)),
    fetchAllEventStartAsnyc: () => dispatch(fetchAllEventStartAsnyc())
})

const mapStateToProps = state => ({
    currentDate: state.date.current,
    num: state.date.daysNum, 
    month: state.date.curMonthNum,
    year: state.date.curYear,
    currentEvents: state.eventsDir.events
})

export default connect(mapStateToProps,mapDispatchToProps)(Calendar)