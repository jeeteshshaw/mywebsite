import React from 'react';
import './style.css';
function Banner(props) {
    const { BannerImage } = props;
    return (
        <div className='Banner'>
            <img src={BannerImage}  alt="image"/>
        </div>
    )
}

export default Banner;