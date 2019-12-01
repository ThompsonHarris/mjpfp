import React from 'react'
import './calendar.styles.scss'

//Redux
import {connect} from 'react-redux'
import {backOneMonthThenSet,addOneMonthThenSet,callCurrentThenSet} from '../../redux/date/date.actions'
import {fetchMonthEventStartAsnyc,fetchAllEventStartAsnyc} from '../../redux/events/events.actions'

//component
import Card from '../card/card.component'
import Navigation from '../Navigation/Navigation.component'
import Footer from '../Footer/Footer.component'
import CardEmpty from '../CardEmpty/CardEmpty.component'

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
        const remainingDays = Math.abs(((this.props.startDay+this.props.num)%7)-7)===7?0:Math.abs(((this.props.startDay+this.props.num)%7)-7)
        console.log(remainingDays)
        return(
            <div class='calendar'>
                <Navigation/>
                    <div className='calendar__grid'>
                    {
                        new Array(this.props.startDay).fill(0).map((val,idx)=>{
                            return (
                                <CardEmpty/>
                            )
                        }   
                    )
                    }
                    {
                        new Array(this.props.num).fill(0).map((val,idx)=>{
                                return (
                                    <Card year={this.props.year} month={this.props.month} day={idx+1}/>
                                )
                            }   
                        )
                    }
                    {
                        new Array(remainingDays).fill(0).map((val,idx)=>{
                            return (
                                <CardEmpty/>
                            )
                        }   
                    )
                    }
                    </div>
                <Footer/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    callCurrentThenSet: () => dispatch(callCurrentThenSet()),
    fetchMonthEventStartAsnyc: id => dispatch(fetchMonthEventStartAsnyc(id)),
    fetchAllEventStartAsnyc: () => dispatch(fetchAllEventStartAsnyc())
})

const mapStateToProps = state => ({
    num: state.date.daysNum, 
    month: state.date.curMonthNum,
    startDay: state.date.startOfMonth,
    year: state.date.curYear,
})

export default connect(mapStateToProps,mapDispatchToProps)(Calendar)