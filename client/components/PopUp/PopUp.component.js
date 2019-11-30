import React from 'react'
import './PopUp.styles.scss'

//redux
import {connect} from 'react-redux'
import {navToggleMenu} from '../../redux/nav/nav.actions'

//Component
import AddEvent from '../addEvent/addEvent.component'
import UpdateEvent from '../updateEvent/updateEvent.component'

class PopUp extends React.Component{

    render(){
        return(
            <div className='popup'>
                <div className='popup_inner'>
                    <div onClick={()=>this.props.navToggleMenu()}>close</div>
                    {
                        this.props.type==='add'?<AddEvent/>:<UpdateEvent/>
                    }
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    navToggleMenu: ()=>dispatch(navToggleMenu())
})

const mapStateToProps = state => ({
    type: state.navigation.displayType
})

export default connect(mapStateToProps,mapDispatchToProps)(PopUp)