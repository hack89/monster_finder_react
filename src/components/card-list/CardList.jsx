import React from 'react'
import {Card} from '../card/Card'
import './cardlist.css'

export const CardList = props => {
    
    return (
        <div className="card-list">
            {props.monsters.map(monster => {
            return (
                <Card key={monster.id} monster={monster} />
                )
            })}
        </div>
    )
}

 
