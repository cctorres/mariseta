import React from 'react'
import '../style/WPPButton.css'
import wppLogo from '../assets/wpp.svg'

const WPPButton = () => {

    const wpp = "Presiona aquí para realizar su pedido"

    return (
        <div className="catalogowpp">
            <a href="https://wa.me/573003193035?text=Hola!%20me%20interesa%20sus%20servicios" target="_blank" rel="noopener noreferrer" className="catalog-a">
                <div className="catalogo-wpp">
                    <p>{wpp}</p>
                    <img src={wppLogo} alt="whatsapp" className="wpp-logo" />
                </div>
            </a>
        </div>
    )
}

export default WPPButton;