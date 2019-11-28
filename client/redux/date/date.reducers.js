import dateActionTypes from './date.types'

const INITIAL_STATE = {}

const dateReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case(dateActionTypes.SET_CURRENT_DATE):
        return{
            ...state,
            current: action.payload
        }
        case(dateActionTypes.SET_MONTH_DAYS):
        return{
            ...state,
            daysNum: action.payload
        }
        case(dateActionTypes.SET_CURRENT_MONTH):
        return{
            ...state,
            curMonth: action.payload
        }
        default:
            return{
                ...state,
                current: {}
            }
    }
}

export default dateReducer