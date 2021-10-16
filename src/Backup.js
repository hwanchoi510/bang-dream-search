import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Cards from './components/Cards.js';
import background from './bg.png';
import './App.css';


function App() {

  // api = "https://bandori.party/api/" 
  const [cardlist, setcards] = useState([]);
  var [page, setpage] = useState(1);
  
  async function getCards() {

    var cards = [];
    var set = await Axios.get(`https://bandori.party/api/cards/?page=${page}`);
    var i = 0;
    if(set != null){
      while(i < 7){
        if(set.data.next != null){
          page++;
          cards = cards.concat(set.data.results);
          set = await Axios.get(`https://bandori.party/api/cards/?page=${page}`);
        }
        i++;
      }
      setpage(page);
    }
    
    setcards(cardlist.concat(cards));
  }

  function setBackground() {
    document.body.style.backgroundImage = `url(${background})`;
    document.body.style.backgroundSize = "cover";
  }

  useEffect(() => {
    // other code
    getCards()
    setBackground();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []) 
  
  return (
    <div className="App">
      <div className="Header">
        <h1 className="AppName">BangDream Card DB</h1>
        <div className="Rarity">
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
        </div>
        <Cards cards={cardlist} />
      </div>
    </div>
  );
}

export default App;


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
