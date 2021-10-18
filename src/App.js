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
            return <Card card={card} key={card['id']}/>
          })} 
      </div> 
      <div>{loading && 'Loading..'}</div>
      <div>{error && 'Error'}</div>
    </div>
  );
}

export default App;
