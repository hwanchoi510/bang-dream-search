import React, { useState } from 'react'
import CardInfo from './CardInfo.js'
import "./Card.css";

export default function Card( { card }) {

    const [showinfo, SetShowInfo] = useState(false)

    return (
        <div className="card">
            <img className="card image" onClick={() => SetShowInfo(showinfo => !showinfo)} src={(card["japanese_name"].includes("birthday")) ? card["image_trained"] : card["image"]} alt="Thumbnail"/>
            <CardInfo card={card} showinfo={showinfo} SetShowInfo={SetShowInfo} />
        </div>
    );
}
