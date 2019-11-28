import React from 'react'
import './card.styles.scss'

const Card = ({day}) => {
    return(
        <div class='card'> day {day+1}</div> 
    )
}

export default Card