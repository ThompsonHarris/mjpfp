import React from 'react'
import {connect} from 'react-redux'
import {createEventStartAsync} from '../../redux/events/events.actions'
import {navToggleMenu} from '../../redux/nav/nav.actions'

class AddEvent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            year: '',
            month: '',
            day: '',
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
            Year: this.state.year,
            Month: this.state.month,
            Day: this.state.day,
            Description: this.state.description
        }
        this.props.createEventStartAsync(payload,this.props.month)
        this.props.navToggleMenu()
        this.setState({
            name: '',
            year: '',
            month: '',
            day: '',
            description: ''
        })
    }


    render(){
        return(
            <div>
                <form onSubmit={this.onHandleSubmit}>
                    <label>name</label>
                    <input name='name' placeholder='name' onChange={(e)=>this.onChangeHandler(e)} value={this.state.name}></input>
                    <label>year</label>
                    <input name='year' placeholder='year' onChange={(e)=>this.onChangeHandler(e)} value={this.state.year}></input>
                    <label>month</label>
                    <input name='month' placeholder='month' onChange={(e)=>this.onChangeHandler(e)} value={this.state.month}></input>
                    <label>day</label>
                    <input name='day' placeholder='day' onChange={(e)=>this.onChangeHandler(e)} value={this.state.day}></input>
                    <label>name</label>
                    <input name='description' placeholder='description' onChange={(e)=>this.onChangeHandler(e)} value={this.state.description}></input>
                    <button>Submit</button>
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
    month: state.date.curMonthNum,
})

export default connect(mapStateToProps,mapDispatchToProps)(AddEvent)