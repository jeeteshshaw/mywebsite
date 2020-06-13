import React, { useState, useEffect } from 'react'
import './style.css'

function Welcome(props) {
    const [Name, setName] = useState('')
    const [verify, setverify] = useState(true)
    
    const CheckSession = async(token) => {
        const api = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ token: token})
        }
        fetch('http://localhost:9000/users/auth', api)
        .then(res => res.json())
        .then(res => {
            const {error} = res
            if(error)
            {
                setverify(false);
            }            
        })
    }

    useEffect(() => {
        const token = sessionStorage.getItem('user_token');  
        CheckSession(token);
        setName(props.match.params.name)
        console.log(verify)
        if(verify == false){
            window.location.replace('/user/login');
        }
        
    }, [verify])

    return (
        <div className='container-display'>
            <div className='display'>
                <div className='heading'>
                    <h1>Welcome To Jesnal Comumnity Mr./Mrs. {Name} </h1>
                </div>
                <div className='body'>
                    <h4> Thanks for Joining our Community. We try to help you as much as we can. If you have any problem please Conntact To our Support page. We have 24/7 Service </h4>
                </div>
                <div className='start-btn'>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Welcome
