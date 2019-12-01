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
                <div className='popup__inner'>
                    <div className='popup__inner__close' onClick={()=>this.props.navToggleMenu()}>X</div>
                    {
                        this.props.data.type==='add'?<AddEvent {...this.props.data} />:<UpdateEvent {...this.props.data} />
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
    data: state.navigation.initData
})

export default connect(mapStateToProps,mapDispatchToProps)(PopUp)