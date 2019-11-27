import React from 'react'
import {connect} from 'react-redux'
import {createEventStartAsync} from '../../redux/events/events.actions'

class AddEvent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name: '',
            year: '',
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
            Description: this.state.description
        }
        this.props.createEventStartAsync(payload)
        this.setState({
            name: '',
            year: '',
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
                    <label>name</label>
                    <input name='description' placeholder='description' onChange={(e)=>this.onChangeHandler(e)} value={this.state.description}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    createEventStartAsync: (payload)=>dispatch(createEventStartAsync(payload))
})

export default connect(null,mapDispatchToProps)(AddEvent)