import React from 'react'
import '../style/Home.css'
import Lottie from 'react-lottie-player'
import giftbox from '../assets/giftbox.json'
import snowfall from '../assets/snowfall.json'


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-side"><Lottie
        animationData={giftbox}
        play
        style={{ width: 400, height: 400 }}
      /></div>
      <div className="catalogo-container">
        <div className="catalogo">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Catalogo 1</a>
        </div>
        <div className="catalogo">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Catalogo 2</a>
        </div>
        <div className="catalogo">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">Catalogo 3</a>
        </div>
      </div>
      <div className="home-side"><Lottie
        loop
        animationData={snowfall}
        play
        style={{ width: 400, height: 400 }}
      /></div>
    </div>
  )
}

export default Home
