import React from 'react'
import '../style/Home.css'
import wppLogo from '../assets/wpp.svg'

const Home = () => {

  const wpp = "Presiona aquí para realizar su pedido"
  const navidad = "Catalogo de Navidad";
  const catalogoDamasBasica = "Catalogo de Dama $15500";
  const catalogoDamasAlta = "Catalogo de Dama $18500";
  const catalogoDamasRibete = "Catalogo de Dama Ribetes $16500";
  const catalogoDamasMangas = "Catalogo de Dama Manga Doblada $21000";
  const catalogoCaballero = "Catalogo de Caballero $21000";
  const catalogoNinos = "Catalogo Infantil $18500"

  return (
    <div className="home-container">
      <div className="catalogo-container">
        <div className="catalogowpp">
          <a href="https://wa.me/573003193035?text=Hola!%20me%20interesa%20sus%20servicios" target="_blank" rel="noopener noreferrer" className="catalogo-a">
            <div className="catalogo-wpp">
              <p>{wpp}</p>
              <img src={wppLogo} alt="whatsapp" className="wpp-logo" />
            </div>
          </a>
        </div>
        <div className="catalogoNavidad">
          <a href="https://drive.google.com/file/d/1afA650qv4G2Zt2QlMcHYcqhtGuSJZ5pZ/view" target="_blank" rel="noopener noreferrer" className="catalogo-a">{navidad}</a>
        </div>
        <div className="catalogoDamasBasica">
          <a href="https://drive.google.com/file/d/1rW6mgKoCcZwoIonRt_QM6rsLT6OAagnl/view" target="_blank" rel="noopener noreferrer" className="catalogo-a">{catalogoDamasBasica}</a>
        </div>
        <div className="catalogoDamasAlta">
          <a href="https://drive.google.com/file/d/1L_Odfa-1KjzLOq4ini0B3NTuzMg5coQQ/view" target="_blank" rel="noopener noreferrer" className="catalogo-a">{catalogoDamasAlta}</a>
        </div>
        <div className="catalogoDamasRibete">
          <a href="https://drive.google.com/file/d/1K7lcADhMlmQ9MpRkGUDMkQ04NhDjtvnM/view" target="_blank" rel="noopener noreferrer" className="catalogo-a">{catalogoDamasRibete}</a>
        </div>
        <div className="catalogoDamasMangas">
          <a href="https://drive.google.com/file/d/1XsliVrT79VCGbx55dOCQCUA8CDvOt99a/view" target="_blank" rel="noopener noreferrer" className="catalogo-a">{catalogoDamasMangas}</a>
        </div>
        <div className="catalogoCaballero">
          <a href="https://drive.google.com/file/d/1b8vvHFnPSTrISRbObD-jpjWAW9ohSwLr/view" target="_blank" rel="noopener noreferrer" className="catalogo-a">{catalogoCaballero}</a>
        </div>
        <div className="catalogoNinos">
          <a href="https://drive.google.com/file/d/1gPSMIUqf_ziBU8jU2L7qasGKwy6FZ06c/view" target="_blank" rel="noopener noreferrer" className="catalogo-a">{catalogoNinos}</a>
        </div>
      </div>
    </div>
  )
}

export default Home
