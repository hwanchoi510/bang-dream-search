import React, {useState} from 'react'
import GetCards from './components/GetCards.js'
import Card from './components/Card.js'
import './App.css'


function App() {

  // api = "https://bandori.party/api/" 
  const [page, setpage] = useState(0)

  const { 
    loading,
    error,
    cards,
    hasMore } = GetCards(page)

  function endOfPage() {
    setpage(page + 1)
  }

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
  const images = importAll(require.context('./assets', false, /\.(png|jpe?g|svg)$/));

  window.onscroll = function () {
    if(
      window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight &&
      hasMore && !loading
    ) endOfPage()
  }


  return (
    <div className="App">
      <div className="Header">
        <h1 className="AppName">BangDream Card DB</h1>
        {/* <div className="Rarity">
          <h3>Rarity</h3>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
        </div>
        <div className="Band">
          <h3>Band</h3>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
        </div>
        <div className="Member">
          <h3>Members</h3>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
        </div>
        <div className="Type">
          <h3>Type</h3>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
          <input type="checkbox"></input>
        </div> */}
      </div>
      <div className="Cards">
          {cards.map((card, index) => {
            return <Card card={card} names={names} images={images} key={card['id']}/>
          })} 
      </div> 
      <div>{loading && hasMore && 'Loading..'}</div>
      <div>{error && hasMore && 'Error'}</div>
    </div>
  );
}

export default App;
