import React from 'react'
import './addEvent.style.scss'

//Redux
import {connect} from 'react-redux'
import {createEventStartAsync} from '../../redux/events/events.actions'
import {navToggleMenu} from '../../redux/nav/nav.actions'

class AddEvent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            description: ''
        }
    }
    onChangeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    onHandleSubmit=(e)=>{
        e.preventDefault()
        const payload = {
            Name: this.state.name,
            Year: this.props.year,
            Month: this.props.month,
            Day: this.props.day,
            Description: this.state.description
        }
        this.props.createEventStartAsync(payload,this.props.monthNum)
        this.props.navToggleMenu()
        this.setState({
            name: '',
            description: ''
        })
    }

    render(){
        return(
            <div className='addevent'>
               <div className='addevent__header'> Add an Event for {this.props.monthName} {this.props.day} </div>
                <form onSubmit={this.onHandleSubmit}>
                    <label>name</label>
                    <input name='name' onChange={(e)=>this.onChangeHandler(e)} value={this.state.name} required></input>
                    <label>Description</label>
                    <textarea name='description' onChange={(e)=>this.onChangeHandler(e)} value={this.state.description} cols="33" rows="5" required></textarea>
                    <button>create</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    createEventStartAsync: (payload,month)=>dispatch(createEventStartAsync(payload,month)),
    navToggleMenu: ()=>dispatch(navToggleMenu())
})

const mapStateToProps = state => ({
    monthNum: state.date.curMonthNum,
    monthName: state.date.curMonthStr,
})

export default connect(mapStateToProps,mapDispatchToProps)(AddEvent)