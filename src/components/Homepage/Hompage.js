import React, { useEffect } from 'react'
import Banner from '../Modules/Banner/Banner'
import BannerImage from './banner.jpg'
import Footer from '../Footer/Footer'
import './style.css'
import Card from './Cards/Card'

function Hompage() {
    useEffect(() => {
        document.title = 'Home'
        
    })
    return (
        <div>
            <Banner BannerImage={BannerImage} />
            <div className="card-area">
                <div className="card-list">
                    <Card />
                    <Card />
                </div>
                <div className="card-list">
                    <Card />
                    <Card />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Hompage
