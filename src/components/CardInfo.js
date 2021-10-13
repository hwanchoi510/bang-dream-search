import React from 'react'
import Rarity from './Rarity.js'
import "./CardInfo.css";

export default function CardInfo( {card, showinfo, SetShowInfo}) {

    const names = ["戸山 香澄", "花園 たえ", "牛込 りみ", "山吹 沙綾", "市ヶ谷 有咲",
                    "美竹 蘭", "青葉 モカ", "上原 ひまり", "宇田川 巴", "羽沢 つぐみ",
                    "弦巻 こころ", "瀬田 薫", "北沢 はぐみ", "松原 花音", "奥沢 美咲",
                    "丸山 彩", "氷川 日菜", "白鷺 千聖", "大和 麻弥", "若宮 イヴ",
                    "湊 友希那", "氷川 紗夜", "今井 リサ", "宇田川 あこ", "白金 燐子",
                    "倉田 ましろ", "桐ヶ谷 透子", "広町 七深", "二葉 つくし", "八潮 瑠唯",
                    "レイヤ",  "ロック", "マスキング", "パレオ", "チュチュ"]
    function importAll(r) {
        let images = [];
        r.keys().map((item, index) => (images[item.replace('./', '')] = r(item)));
        return images;
    }
    const images = importAll(require.context('../assets', false, /\.(png|jpe?g|svg)$/));

    return (showinfo ? 
        <div className="background" onClick={() => SetShowInfo(showinfo => !showinfo)}>
            <div className="cardmodal"> 
                <img className="cardimg" src={(card["art_trained"] != null) ? card["art_trained"] : card["art"]} alt="Cart Art"/>
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
        </div> : null
    )
}
