import React from 'react'
import './card.css'

export const Card = props => {
    return (
        <div className="card-container">
            <img src={`https://robohash.org/${props.monster.id}?set=set1`} alt="monster"/>
            <h2>{props.monster.name}</h2>
            <p>{props.monster.email}</p>

        </div>
    )
}


