import React from 'react'
import "../style/Footer.css"
import ig from "../assets/ig.svg"
import fb from "../assets/fb.svg"

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="texto-footer-container"> <p>Solo aceptamos pedidos por medio de Whatsapp </p> </div>
            <div className="logo-footer-container">
                <a href="https://www.instagram.com/mariseta_tshirt"
                    target="_blank"
                    rel="noopener noreferrer"><img src={fb} alt="fb-logo" className="footer--logo" /></a>
                <a href="https://www.instagram.com/mariseta_tshirt"
                    target="_blank"
                    rel="noopener noreferrer"> <img src={ig} alt="ig-logo" className="footer--logo" /> </a>
            </div>
            <div className="texto-footer-container"> <p> Siguenos en nuestras redes sociales</p> </div>
        </div>
    )
}

export default Footer
