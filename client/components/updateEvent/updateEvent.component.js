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
            description: ''
        }
    }
    onChangeHandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
        console.log(this.state)
    }

    onHandleSubmit=(e)=>{
        e.preventDefault()
        const payload = {
            Name: this.state.name,
            Year: this.state.year,
            Description: this.state.description
        }
        this.props.updateEventStartAsync(Number(this.state.id),payload)
        this.setState({
            id: '',
            name: '',
            year: '',
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
                    <label>name</label>
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