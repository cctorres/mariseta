import React from 'react'
import "../style/Header.css"
import logo from "../assets/logo.png"

const Header = () => {
    return (
        <div className="header-container">
            <img src={logo} alt="mariseta-logo" className="header--logo"/>
            <p>Mariseta</p>
        </div>
    )
}

export default Header
