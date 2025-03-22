import React from 'react'
import './Footer.css'
import Github from './../../assets/github.png'
import Instagram from './../../assets/instagram.png'
import LinkedIn from './../../assets/linkedin.png'
import Logo from './../../assets/logo.png'

function Footer() {
    return (
        <div className="footer-container">
            <hr />
            <div className="footer">
                <div className="socials">
                    <img src={Github} alt="" />
                    <img src={Instagram} alt="" />
                    <img src={LinkedIn} alt="" />
                </div>
                <div className="logo-footer">
                    <img src={Logo} alt="" />
                </div>
            </div>
            <div className="blur blurFooter1"></div>
            <div className="blur blurFooter2"></div>
        </div>
    )
}

export default Footer