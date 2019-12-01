import React from 'react'
import './Footer.styles.scss'

//Redux
import {connect} from 'react-redux'

class Footer extends React.Component{
    render(){
        return(
            <div className='footer'>
            {this.props.year}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    year: state.date.curYear,
})

export default connect(mapStateToProps)(Footer)