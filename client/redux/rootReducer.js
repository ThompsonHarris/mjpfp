import {combineReducers} from 'redux'

//reducers
import eventReducer from './events/events.reducers'


const rootReducer = combineReducers({
    eventsDir: eventReducer

})

export default rootReducer