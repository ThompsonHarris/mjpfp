import dateActionTypes from './date.types'
import moment from 'moment'

export const setPresentDate = (dateObj) => ({
    type:dateActionTypes.SET_PRESENT_DATE,
    payload: dateObj
})

export const setCurrentDate = (dateObj) => ({
    type:dateActionTypes.SET_CURRENT_DATE,
    payload: dateObj
})

export const setStartOfMonth = (day) => ({
    type:dateActionTypes.SET_START_OF_MONTH,
    payload: day
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

export const setCurrentYear = (year) => ({
    type:dateActionTypes.SET_CURRENT_YEAR,
    payload: year
})

export const callPresentAndSet = () => {
    return dispatch => {
        let presentDate  = moment()
        let presYear = presentDate.year()
        let presMonth = presentDate.month()
        let presDay = presentDate.format('D')
        dispatch(setPresentDate({year:presYear,month:(presMonth+1),day:Number(presDay)}))
    }
}



export const callCurrentThenSet = () => {
    return dispatch => {
        let m  = moment()
        let numdays = m.daysInMonth()
        let startOfMonth = m.startOf('month').day()
        let curYear = m.year()
        let currentMonthNum = m.month()
        let currentMonthStr = m.format("MMMM")
        dispatch(setDaysInMonth(numdays))
        dispatch(setCurrentYear(curYear))
        dispatch(setStartOfMonth(startOfMonth))
        dispatch(setCurrentMonthNum(currentMonthNum+1))
        dispatch(setCurrentMonthStr(currentMonthStr))
        dispatch(setCurrentDate(m))
        
    }
}

export const backOneMonthThenSet = (dateObj) => {
    return dispatch => {
        let newTime = dateObj.subtract(1, 'months')
        let numdays = newTime.daysInMonth()
        let startOfMonth = newTime.startOf('month').day()
        let curYear = newTime.year()
        let currentMonthNum = newTime.month()
        let currentMonthStr = newTime.format("MMMM")
        dispatch(setDaysInMonth(numdays))
        dispatch(setStartOfMonth(startOfMonth))
        dispatch(setCurrentYear(curYear))
        dispatch(setCurrentMonthNum(currentMonthNum+1))
        dispatch(setCurrentMonthStr(currentMonthStr))
        dispatch(setCurrentDate(newTime))
    }
}

export const addOneMonthThenSet = (dateObj) => {
    return dispatch => {
        let newTime = dateObj.add(1, 'months')
        let numdays = newTime.daysInMonth()
        let startOfMonth = newTime.startOf('month').day()
        let curYear = newTime.year()
        let currentMonthNum = newTime.month()
        let currentMonthStr = newTime.format("MMMM")
        dispatch(setDaysInMonth(numdays))
        dispatch(setStartOfMonth(startOfMonth))
        dispatch(setCurrentYear(curYear))
        dispatch(setCurrentMonthNum(currentMonthNum+1))
        dispatch(setCurrentMonthStr(currentMonthStr))
        dispatch(setCurrentDate(newTime))
    }
}