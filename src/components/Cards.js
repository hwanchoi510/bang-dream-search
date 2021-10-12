import React from 'react';
import './Cards.css';
import Card from './Card.js';

export default function Cards( {cards} ) {
    return (
        <div className="cards">
            {cards.map(card => {
                return <Card card={card} key={card["id"]} />;
            })}
        </div> 
    )
}
