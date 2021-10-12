import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import Cards from './components/Cards.js';
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

  useEffect(() => getCards(), []);

  return (
    <div className="App">
      <div className="Header">
        <h1 className="AppName">BangDream Card Search</h1>
        <input className="SearchBar"></input>
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
