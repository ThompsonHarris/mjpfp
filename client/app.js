import React from 'react'
import {Route,Link} from 'react-router-dom'
import './app.css'

//redux
// import {connect} from 'react-redux'
// import {callCurrentThenSet} from './redux/date/date.actions'

//components
import Calendar from './components/Calendar/Calendar.component'

class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div class='container'>
                <Route render={()=><Calendar/>}/>
            </div>
        )
    }
}

// const mapDispatchToProps = dispatch =>({
//     callCurrentThenSet: () => dispatch(callCurrentThenSet())
// })

export default App