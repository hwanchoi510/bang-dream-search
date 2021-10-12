import React from 'react'
import "./CardInfo.css";

export default function CardInfo( {card, showinfo, SetShowInfo}) {
    return (showinfo ? 
        <div className="background" onClick={() => SetShowInfo(showinfo => !showinfo)}>
            <div className="cardmodal"> 
                <img className="cardimg" src={(card["art_trained"] != null) ? card["art_trained"] : card["art"]}/>
                <div className="cardinfo">
                    <p>{card["japanese_name"]}</p>
                    <div className="cardtype">
                        {card["i_rarity"]}
                        {card["i_attribute"]}
                    </div>
                    <div className="cardparameter">
                        <div className="parameter">
                            <h4><br></br></h4>
                            <p>Performance</p>
                            <p>Visual</p>
                            <p>Technique</p>
                        </div>
                        <div className="min">
                            <h4>Min</h4>
                            <p>{card["performance_min"]}</p>
                            <p>{card["visual_min"]}</p>
                            <p>{card["technique_min"]}</p>
                        </div>
                        <div className="max">
                            <h4>Max</h4>
                            <p>{card["performance_max"]}</p>
                            <p>{card["visual_max"]}</p>
                            <p>{card["technique_max"]}</p>
                        </div>
                        <div className="trained">
                            <h4>Trained</h4>
                            <p>{card["performance_trained_max"]}</p>
                            <p>{card["visual_trained_max"]}</p>
                            <p>{card["technique_trained_max"]}</p>
                        </div>
                    </div>
                    <div className="cardskill">
                        <p>{card["japanese_skill_name"]}</p>
                        <p>{card["full_skill"]}</p>
                    </div>
                </div>
                
            </div>
        </div> : null
    )
}
