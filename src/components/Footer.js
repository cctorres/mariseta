import React from 'react'
import "../style/Footer.css"
import ig from "../assets/ig.svg"
import wpp from "../assets/wpp.svg"

const Footer = () => {
    return (
        <div className="footer-container">
            <img src={ig} alt="ig-logo" className="footer--logo"/>
            <img src={wpp} alt="wpp-logo" className="footer--logo"/>
        </div>
    )
}

export default Footer
