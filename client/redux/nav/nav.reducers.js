import navActionTypes from './nav.types'

const INITIAL_STATE = {
    displayPopUp: false
}

const navReducer = (state=INITIAL_STATE,action) => {
    switch(action.type){
        case(navActionTypes.TOGGLE_NAV):
            return{
                ...state,
                displayPopUp: !state.displayPopUp
            }
        case(navActionTypes.SET_NAV_TYPE):
            return{
                ...state,
                displayType: action.payload
            }
        default:
            return state
    }
}

export default navReducer