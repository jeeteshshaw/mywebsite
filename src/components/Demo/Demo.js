import React, { useEffect } from 'react'
import Banner from '../Modules/Banner/Banner'
import BannerImage from './banner.jpg'

function Demo() {
    useEffect(() => {
        document.title = 'Demo'
        data();
    })

    const data = async () =>{
        fetch("http://localhost:9000/demo")
        .then(res => res.text())
        .then(res =>console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <div>
            <Banner BannerImage={BannerImage} />
            <div> 
                
            </div>
        </div>
    )
}

export default Demo
