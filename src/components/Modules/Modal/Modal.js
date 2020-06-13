import React from 'react'
import './style.css'

function Model() {

    const display = () => {
        document.getElementById('modal').style.display = 'none';
    }
    return (
        <div className='modal-container' id='modal'>
            <div className='modal'>
                <div className='header'>
                    <p>This is head</p>
                </div>
                <div className='body'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sit eligendi accusantium saepe possimus! Tenetur, asperiores delectus modi aliquid dolorem blanditiis voluptate explicabo odio vitae, dolorum, sit accusamus quibusdam facere?</p>
                </div>
                <div className='foot'>
                    <button onClick={display}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Model
