import React from 'react'
import "../style/Header.css"
import logo from "../assets/logoMariseta.svg"
import logoShirt from "../assets/logoMarisetaTShirt.svg"

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="mariseta-logo" className="header--logo" />
            <img src={logoShirt} alt="mariseta-logo-shirt" className="mariseta-logo-shirt" />
        </div>
    )
}

export default Header
