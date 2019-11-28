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

export const setCurrentMonth = (month) => ({
    type:dateActionTypes.SET_CURRENT_MONTH,
    payload: month
})

export const callCurrentThenSet = () => {
    return dispatch => {
        let currentTime  = moment()
        let numdays = currentTime.daysInMonth()
        let currentMonth = currentTime.format("MMMM")
        dispatch(setDaysInMonth(numdays))
        dispatch(setCurrentMonth(currentMonth))
        dispatch(setCurrentDate(currentTime))
    }
}

export const backOneMonthThenSet = (dateObj) => {
    return dispatch => {
        let newTime = dateObj.subtract(1, 'months')
        let numdays = newTime.daysInMonth()
        let currentMonth = newTime.format("MMMM")
        dispatch(setDaysInMonth(numdays))
        dispatch(setCurrentMonth(currentMonth))
        dispatch(setCurrentDate(newTime))
    }
}

export const addOneMonthThenSet = (dateObj) => {
    return dispatch => {
        let newTime = dateObj.add(1, 'months')
        let numdays = newTime.daysInMonth()
        let currentMonth = newTime.format("MMMM")
        dispatch(setDaysInMonth(numdays))
        dispatch(setCurrentMonth(currentMonth))
        dispatch(setCurrentDate(newTime))
    }
}