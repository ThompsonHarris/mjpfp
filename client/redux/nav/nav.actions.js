import navActionTypes from './nav.types'

export const navToggleMenu = () => ({
    type:navActionTypes.TOGGLE_NAV
})

export const setNavTypeAndInit = (obj) => ({
    type:navActionTypes.SET_NAV_TYPE,
    payload: obj
})

export const toggleSetTypeAndinitData = (obj) => {
    return dispatch => {
        dispatch(navToggleMenu())
        dispatch(setNavTypeAndInit(obj))
    }
}

