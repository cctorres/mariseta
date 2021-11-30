import React from 'react'
import '../style/Home.css'
import Lottie from 'react-lottie-player'
import xmas from '../assets/xmas.json'
import snowfall from '../assets/snowfall.json'


const Home = () => {

  const wpp = "Presiona aquí para realizar tus pedidos. Con gusto te atenderemos."
  const navidad = "Catalogo de Navidad";
  const catalogoDamas13500 = "Catalogo de Dama $13500";
  const catalogoDamas16500 = "Catalogo de Dama $16500";
  const catalogoDamas14500 = "Catalogo de Dama Ribetes $14500";
  const catalogoDamas19000 = "Catalogo de Dama Manga Doblada $19000";
  const catalogoCaballero19000 = "Catalogo de Caballero $19000";
  const catalogoNinos = "Catalogo de Niños"

  return (
    <div className="home-container">
      <div className="home-side"><Lottie
        animationData={xmas}
        play
        style={{ width: 400, height: 400 }}
      /></div>
      <div className="catalogo-container">
        <div className="mobileLottieContainer"><Lottie
          animationData={xmas}
          play
          style={{ width: 100, height: 100 }}
        /></div>
        <div className="catalogowpp">
          <a href="https://wa.me/573003193035?text=Hola!%20me%20interesa%20sus%20servicios" target="_blank" rel="noopener noreferrer" className="catalogo-a">{wpp}</a>
        </div>
        <div className="catalogoNavidad">
          <a href="https://drive.google.com/file/d/1afA650qv4G2Zt2QlMcHYcqhtGuSJZ5pZ/view" target="_blank" rel="noopener noreferrer" className="catalogo-a">{navidad}</a>
        </div>
        <div className="catalogoDamas13500">
          <a href="https://drive.google.com/file/d/1rW6mgKoCcZwoIonRt_QM6rsLT6OAagnl/view" target="_blank" rel="noopener noreferrer" className="catalogo-a">{catalogoDamas13500}</a>
        </div>
        <div className="catalogoDamas16500">
          <a href="https://drive.google.com/file/d/1L_Odfa-1KjzLOq4ini0B3NTuzMg5coQQ/view" target="_blank" rel="noopener noreferrer" className="catalogo-a">{catalogoDamas14500}</a>
        </div>
        <div className="catalogoDamas14500">
          <a href="https://drive.google.com/file/d/1K7lcADhMlmQ9MpRkGUDMkQ04NhDjtvnM/view" target="_blank" rel="noopener noreferrer" className="catalogo-a">{catalogoDamas16500}</a>
        </div>
        <div className="catalogoDamas19000">
          <a href="https://drive.google.com/file/d/1XsliVrT79VCGbx55dOCQCUA8CDvOt99a/view" target="_blank" rel="noopener noreferrer" className="catalogo-a">{catalogoDamas19000}</a>
        </div>
        <div className="catalogoCaballero19000">
          <a href="https://drive.google.com/file/d/1b8vvHFnPSTrISRbObD-jpjWAW9ohSwLr/view" target="_blank" rel="noopener noreferrer" className="catalogo-a">{catalogoCaballero19000}</a>
        </div>
        <div className="catalogoNinos">
          <a href="https://drive.google.com/file/d/1gPSMIUqf_ziBU8jU2L7qasGKwy6FZ06c/view" target="_blank" rel="noopener noreferrer" className="catalogo-a">{catalogoNinos}</a>
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
