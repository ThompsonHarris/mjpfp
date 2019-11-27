import eventActionTypes from './events.types'
import axios from 'axios'

export const fetchEventStart = () => ({
    type:eventActionTypes.FETCH_EVENT_START
})

export const fetchEventSuccess = (eventData) => ({
    type:eventActionTypes.FETCH_EVENT_SUCCESS,
    payload:eventData
})

export const fetchEventFailure = (errorMessage) => ({
    type:eventActionTypes.FETCH_EVENT_FAILURE,
    payload:eventData
})

export const fetchEventStartAsnyc = () => {
    return dispatch => {
        dispatch(fetchEventStart)
        axios.get('/api/events')
        .then((res)=>{
            dispatch(fetchEventSuccess(res.data))
        })
        .catch((err)=>{
            dispatch(fetchEventFailure(err.message))
        })
    }
}

export const createEventStartAsync = (obj) => {
    return dispatch =>{
        axios.post('/api/events', obj)
        .then((res=>{
            dispatch(fetchEventStartAsnyc())
        }))
        .catch((err)=>{
            dispatch(fetchEventFailure(err.message))
        })
    }
}

export const deleteEventStartAsync = (id) => {
    return dispatch =>{
        axios.delete(`/api/events/${id}`)
        .then((res=>{
            dispatch(fetchEventStartAsnyc())
        }))
        .catch((err)=>{
            dispatch(fetchEventFailure(err.message))
        })
    }
}

export const updateEventStartAsync = (id,obj) => {
    return dispatch =>{
        axios.put(`/api/events/${id}`,obj)
        .then((res=>{
            dispatch(fetchEventStartAsnyc())
        }))
        .catch((err)=>{
            dispatch(fetchEventFailure(err.message))
        })
    }
}