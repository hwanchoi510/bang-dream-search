import React, { useState } from 'react'
import CardInfo from './CardInfo.js'
import "./Card.css";

export default function Card( { card, names, images }) {

    const [showinfo, SetShowInfo] = useState(false)

    return (
        <div className="card">
            <img className="card image" onClick={() => SetShowInfo(showinfo => !showinfo)} src={
                (card["japanese_name"] != null) ? (
                    card["japanese_name"].includes("birthday") ? card["image_trained"] : card["image"]
                ) : card["image"]
            } alt="Thumbnail"/>
            <CardInfo card={card} names={names} images={images} showinfo={showinfo} SetShowInfo={SetShowInfo} />
        </div>
    );
}
