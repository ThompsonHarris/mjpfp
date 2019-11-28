import eventActionTypes from './events.types'

const INITIAL_STATE = {}

const eventReducer = (state=INITIAL_STATE, action) => {
    switch(action.type){
        case(eventActionTypes.FETCH_EVENT_START):
        return{
            ...state,
            isFetching: true
        }
        case(eventActionTypes.FETCH_EVENT_SUCCESS):
        return{
            ...state,
            isFetching: false,
            events:action.payload
        }
        case(eventActionTypes.FETCH_EVENT_FAILURE):
        return{
            ...state,
            isFetching: false,
            errorMessage: action.payload
        }
        default:
            return{
                ...state,
                events:[
                    {
                    id: '',
                    Name: '',
                    Year: '',
                    Month: '',
                    Day: '',
                    Description: ''}
                ]
            }
    }
}

export default eventReducer