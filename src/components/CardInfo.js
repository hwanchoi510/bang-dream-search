import React from 'react'
import Rarity from './Rarity.js'
import "./CardInfo.css";

export default function CardInfo( {card, names, images, showinfo, SetShowInfo}) {

    
    
    function changeImage(e) {
        if(e.target.getAttribute("src") === card["art"]) {
            if(card["art_trained"] != null) {
                e.target.setAttribute('src', card["art_trained"]);
            }
        } else {
            e.target.setAttribute('src', card["art"]);
        }
        console.log(card);
    }

    return (showinfo ? 
        <div className="background" onClick={() => SetShowInfo(showinfo => !showinfo)}>
            <div className="cardmodal" onClick={(event) => event.stopPropagation()}> 
                <img className="cardimg" src={card["art"]} alt="Cart Art" onClick={changeImage}/>
                <div className="cardinfo">
                    <h3>[{card["japanese_name"]}] {names[card["member"]-6]}</h3>
                    <div className="cardtype">
                        <Rarity rarity={card['i_rarity']} />
                        <img src={images[`${card["i_attribute"]}.png`].default} alt="Type"/>
                        <img src={images[`${Math.floor((card["member"]-6)/5)}.png`].default} alt="Band"/>
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
            <script type="text/javascript">
            
            </script> 
        </div>
        : null
    )
}
