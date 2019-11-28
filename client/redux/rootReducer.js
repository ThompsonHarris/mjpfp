import {combineReducers} from 'redux'

//reducers
import eventReducer from './events/events.reducers'
import dateReducer from './date/date.reducers'


const rootReducer = combineReducers({
    eventsDir: eventReducer,
    date: dateReducer
})

export default rootReducer