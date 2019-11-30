import {combineReducers} from 'redux'

//reducers
import eventReducer from './events/events.reducers'
import dateReducer from './date/date.reducers'
import navReducer from './nav/nav.reducers'


const rootReducer = combineReducers({
    eventsDir: eventReducer,
    date: dateReducer,
    navigation: navReducer
})

export default rootReducer