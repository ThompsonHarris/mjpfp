import React from 'react'
import {connect} from 'react-redux'
import {updateEventStartAsync} from '../../redux/events/events.actions'

class UpdateEvent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            id: '',
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
        this.props.updateEventStartAsync(Number(this.state.id),payload)
        this.setState({
            id: '',
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
                    <label>id</label>
                    <input name='id' placeholder='id' onChange={(e)=>this.onChangeHandler(e)} value={this.state.id}></input>
                    <label>name</label>
                    <input name='name' placeholder='name' onChange={(e)=>this.onChangeHandler(e)} value={this.state.name}></input>
                    <label>year</label>
                    <input name='year' placeholder='year' onChange={(e)=>this.onChangeHandler(e)} value={this.state.year}></input>
                    <label>month</label>
                    <input name='month' placeholder='month' onChange={(e)=>this.onChangeHandler(e)} value={this.state.month}></input>
                    <label>day</label>
                    <input name='day' placeholder='day' onChange={(e)=>this.onChangeHandler(e)} value={this.state.day}></input>
                    <label>description</label>
                    <input name='description' placeholder='description' onChange={(e)=>this.onChangeHandler(e)} value={this.state.description}></input>
                    <button>Update</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    updateEventStartAsync: (id,payload)=>dispatch(updateEventStartAsync(id,payload))
})

export default connect(null,mapDispatchToProps)(UpdateEvent)