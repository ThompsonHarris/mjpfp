import React from 'react'

//utils
import {fetchEventStartAsnyc,deleteEventStartAsync} from './redux/events/events.actions'
import {connect} from 'react-redux'

//components
import AddEvent from './components/addEvent/addEvent.component'
import UpdateEvent from './components/updateEvent/updateEvent.component'

class App extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchEventStartAsnyc()
    }

    checkDate = (month, year) => {
        const currentMonth = {
            inputData: `${month} ${year}`,
            StartingDay:new Date(year, month, 1).getDay(),
            NumberOfDays: new Date(year, month, 0).getDate()
        }
        return currentMonth
    }

    render(){
        const currentDate = Date.now();
        return(
            <div>
              React is running {currentDate}
              <ul>
              {
                this.props.events.map(({id, Name, Year, Description})=>{
                    return(
                        <li key={id}>{id} {Name} {Year} {Description}<a onClick={(e)=>this.props.deleteEventStartAsync(id)}> - </a></li>
                    ) 
                })
              }
              </ul>
              <AddEvent/>
              <UpdateEvent/>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchEventStartAsnyc: ()=>dispatch(fetchEventStartAsnyc()),
    deleteEventStartAsync: (id)=>dispatch(deleteEventStartAsync(id))
})

const mapStateToProps = state =>({
    events: state.eventsDir.events
})

export default connect(mapStateToProps,mapDispatchToProps)(App)