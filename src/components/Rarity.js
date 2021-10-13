import React from 'react'
import untrainedstar from '../assets/star_untrained.png'
import trainedstar from '../assets/star_trained.png'

export default function Rarity( { rarity }) {

    if(rarity === 1) {
        return (
            <div className="rarity">
                <img src={untrainedstar} alt="star_untrained.png"/>
            </div>
        )
    } else if(rarity === 2){
        return (
            <div className="rarity">
                <img src={untrainedstar} alt="star_untrained.png"/>
                <img src={untrainedstar} alt="star_untrained.png"/>
            </div>
        )
    } else if(rarity === 3){
        return (
            <div className="rarity"> 
                <img src={trainedstar} alt="star_trained.png"/>
                <img src={trainedstar} alt="star_trained.png"/>
                <img src={trainedstar} alt="star_trained.png"/>
            </div>
        )
    } else {
        return (
            <div className="rarity">
                <img src={trainedstar} alt="star_trained.png"/>
                <img src={trainedstar} alt="star_trained.png"/>
                <img src={trainedstar} alt="star_trained.png"/>
                <img src={trainedstar} alt="star_trained.png"/>
            </div>
        )
    }
    
}
