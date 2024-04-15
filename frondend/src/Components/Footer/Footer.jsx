import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo.png'
import TabbedFooter from './TabbedFooter'

const Footer = () =>{
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>STYLE LAB</p>
            </div>
            <TabbedFooter />
            <div className="footer-copyright">
                <hr />
                <p>Copyright @ 2024 Fashion Hive - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer;