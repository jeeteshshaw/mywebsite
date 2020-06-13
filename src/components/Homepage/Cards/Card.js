import React from 'react'
import Image from "./image.jpg"
import './style.css'
function Card() {
    return (
        <div className="card">
            <div className="img">
                <img src={Image} alt="image"/>
            </div>
            <div className="Text">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ad sunt vitae quasi! Distinctio, obcaecati. Itaque aliquam soluta suscipit, a magni nisi harum atque error facilis, voluptas nulla possimus inventore!</p>
            </div>
        </div>
    )
}

export default Card;
