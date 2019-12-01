import React from 'react'
import {Route,Link} from 'react-router-dom'
import './app.css'

//redux
import {connect} from 'react-redux'

//components
import Calendar from './components/Calendar/Calendar.component'
import PopUp from './components/PopUp/PopUp.component'


class App extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <>
            <div class='container'> 
                <Route render={()=><Calendar/>}/>
            </div>
            {
            this.props.nav?<PopUp/>:null
            }
            </>
        )
    }
}

const mapStateToProps = state => ({
    nav: state.navigation.displayPopUp
})

export default connect(mapStateToProps)(App)