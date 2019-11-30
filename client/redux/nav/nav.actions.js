import navActionTypes from './nav.types'

export const navToggleMenu = () => ({
    type:navActionTypes.TOGGLE_NAV
})

export const setNavType = (str) => ({
    type:navActionTypes.SET_NAV_TYPE,
    payload: str
})

export const toggleAndSetType = (type) => {
    return dispatch => {
        dispatch(navToggleMenu())
        dispatch(setNavType(type))
    }
}

