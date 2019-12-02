import React from 'react'
import './update.style.scss'

//Redux
import {connect} from 'react-redux'
import {updateEventStartAsync,deleteEventStartAsync} from '../../redux/events/events.actions'
import {navToggleMenu} from '../../redux/nav/nav.actions'


class UpdateEvent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: this.props.name,
            year: this.props.year,
            month: this.props.month,
            day: this.props.day,
            description: this.props.description
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
        this.props.updateEventStartAsync(Number(this.props.id),payload,this.props.month)
        this.props.navToggleMenu()
        this.setState({
            name: '',
            year: '',
            month: '',
            day: '',
            description: ''
        })
    }

    onhandleDelete=(e)=>{
        e.preventDefault()
        this.props.deleteEventStartAsync(this.props.id,this.props.month)
        this.props.navToggleMenu()
    }

    onhandleComplete=(e)=>{
        e.preventDefault()
        const payload = {
            Completion: true
        }
        this.props.updateEventStartAsync(Number(this.props.id),payload,this.props.month)
        this.props.navToggleMenu()
    }


    render(){
        return(
            <div className='updateevent'>
                <div className='updateevent__header'> Update this event id:{this.props.id}</div>
                <form onSubmit={this.onHandleSubmit}>
                    <label>name</label>
                    <input name='name' placeholder='name' onChange={(e)=>this.onChangeHandler(e)} value={this.state.name} required></input>
                    <label>year</label>
                    <input name='year' placeholder='year' onChange={(e)=>this.onChangeHandler(e)} value={this.state.year} required></input>
                    <label>month</label>
                    <input name='month' placeholder='month' onChange={(e)=>this.onChangeHandler(e)} value={this.state.month} required></input>
                    <label>day</label>
                    <input name='day' placeholder='day' onChange={(e)=>this.onChangeHandler(e)} value={this.state.day} required></input>
                    <label>description</label>
                    <textarea name='description' placeholder='description' onChange={(e)=>this.onChangeHandler(e)} value={this.state.description} cols="33" rows="5" required></textarea>
                    <button type='submit'>Update</button>
                </form>
                    <button className='updateevent__completeButton' type='delete' onClick={this.onhandleComplete}>COMPLETE</button>
                    <button className='updateevent__deleteButton' type='delete' onClick={this.onhandleDelete}>DELETE</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    updateEventStartAsync: (id,payload,month)=>dispatch(updateEventStartAsync(id,payload,month)),
    deleteEventStartAsync: (id,month)=>dispatch(deleteEventStartAsync(id,month)),
    navToggleMenu: ()=>dispatch(navToggleMenu())
})

export default connect(null,mapDispatchToProps)(UpdateEvent)