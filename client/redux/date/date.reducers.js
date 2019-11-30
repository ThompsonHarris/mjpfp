import dateActionTypes from './date.types'

const INITIAL_STATE = {
    current: ['test'],
    curMonthNum: 0
}

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
        case(dateActionTypes.SET_CURRENT_MONTH_NUM):
        return{
            ...state,
            curMonthNum: action.payload
        }
        case(dateActionTypes.SET_CURRENT_MONTH_STR):
        return{
            ...state,
            curMonthStr: action.payload
        }
        case(dateActionTypes.SET_CURRENT_YEAR):
        return{
            ...state,
            curYear: action.payload
        }
        default:
             return state
    }
}

export default dateReducer