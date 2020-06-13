import React, { useEffect } from 'react'
import Banner from '../Modules/Banner/Banner'
import BannerImage from './banner.jpg'

function About() {
    useEffect(() => {
        document.title = 'About'
    })
    return (
        <div>
            <Banner BannerImage={BannerImage} />
            <div className='card-list'> 
                
            </div>
        </div>
    )
}

export default About
