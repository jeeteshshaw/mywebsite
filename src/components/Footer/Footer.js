import React from 'react'
import fb from './facebook.svg'
import instagram from './instagram.svg'
import twitter from './twitter.svg'
import whatsapp from './whatsapp.svg'
import './style.css'

function Footer() {
    return (
        <footer>
            <div className='text-header'>
                <h1> Follow Us on Social Platform</h1>
                <h4>To Contact Us</h4>
            </div>
            <div className='footer-container'>
                <div className='social'>
                    <img src={fb}  alt='facebook'/>
                    <h5>Facebook</h5>
                </div>
                <div className='social'>
                    <img src={twitter} alt='twitter' />
                    <h5>Twitter</h5>
                </div>
                <div className='social'>
                    <img src={instagram} alt='instagram'/>
                    <h5>Instagram</h5>
                </div>
                <div className='social'>
                    <img src={whatsapp} alt='whatsapp' />
                    <h5>WhatsApp</h5>
                </div>
            </div>
        </footer>
    )
}

export default Footer
