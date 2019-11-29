import dateActionTypes from './date.types'
import moment from 'moment'

export const setCurrentDate = (dateObj) => ({
    type:dateActionTypes.SET_CURRENT_DATE,
    payload: dateObj
})

export const setDaysInMonth = (num) => ({
    type:dateActionTypes.SET_MONTH_DAYS,
    payload: num
})

export const setCurrentMonthNum = (month) => ({
    type:dateActionTypes.SET_CURRENT_MONTH_NUM,
    payload: month
})

export const setCurrentMonthStr = (month) => ({
    type:dateActionTypes.SET_CURRENT_MONTH_STR,
    payload: month
})

export const callCurrentThenSet = () => {
    return dispatch => {
        let m  = moment()
        let numdays = m.daysInMonth()
        let currentMonthNum = m.month()
        let currentMonthStr = m.format("MMMM")
        dispatch(setDaysInMonth(numdays))
        dispatch(setCurrentMonthNum(currentMonthNum+1))
        dispatch(setCurrentMonthStr(currentMonthStr))
        dispatch(setCurrentDate(m))
        
    }
}

export const backOneMonthThenSet = (dateObj) => {
    return dispatch => {
        let newTime = dateObj.subtract(1, 'months')
        let numdays = newTime.daysInMonth()
        let currentMonthNum = newTime.month()
        let currentMonthStr = newTime.format("MMMM")
        dispatch(setDaysInMonth(numdays))
        dispatch(setCurrentMonthNum(currentMonthNum+1))
        dispatch(setCurrentMonthStr(currentMonthStr))
        dispatch(setCurrentDate(newTime))
    }
}

export const addOneMonthThenSet = (dateObj) => {
    return dispatch => {
        let newTime = dateObj.add(1, 'months')
        let numdays = newTime.daysInMonth()
        let currentMonthNum = newTime.month()
        let currentMonthStr = newTime.format("MMMM")
        dispatch(setDaysInMonth(numdays))
        dispatch(setCurrentMonthNum(currentMonthNum+1))
        dispatch(setCurrentMonthStr(currentMonthStr))
        dispatch(setCurrentDate(newTime))
    }
}