import React from 'react'
import './Navigation.styles.scss'

//Redux
import {connect} from 'react-redux'
import {backOneMonthThenSet,addOneMonthThenSet} from '../../redux/date/date.actions'

class Navigation extends React.Component{
    render(){
        return(
            <div className="navigation">
            <div className="navigation__button" onClick={()=>this.props.backOneMonthThenSet(this.props.currentDate)}>X</div>
            <div className="navigation__title">{this.props.month}</div>
            <div className="navigation__button" onClick={()=>this.props.addOneMonthThenSet(this.props.currentDate)}>X</div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    backOneMonthThenSet: dateObj => dispatch(backOneMonthThenSet(dateObj)),
    addOneMonthThenSet: dateObj => dispatch(addOneMonthThenSet(dateObj)),
})

const mapStateToProps = state => ({
    month: state.date.curMonthStr,
    currentDate: state.date.current,
})

export default connect(mapStateToProps,mapDispatchToProps)(Navigation)