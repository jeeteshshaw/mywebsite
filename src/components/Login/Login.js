import React, { useState, useEffect } from 'react'
import PhoneImage from './phone.png'
import './style.css'

function Login() {
    const [Email, setEmail] = useState("")
    const [Pass, setPass] = useState("")
    const [Login, setLogin] = useState(false)

    const emailHandler = event => setEmail(event.target.value.trim());
    const passHandler = event => setPass(event.target.value.trim());

    const LoginSubmit = async(e) => {
        e.preventDefault();
        setLogin(true)
    }

    const LoginCheck = () => {
        const api = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email: Email, password: Pass})
        };
        fetch('http://localhost:9000/users/login', api)
        .then(res => res.json())
        .then(res => {
            const { error } = res;
            if(error)
            console.log(error);
            else
            {
                sessionStorage.setItem('user_token', (res.token).toString());
                window.location.replace(`/`);
            }
        });
    }
    
    useEffect(() => {
        if(Login == true){
            LoginCheck();
        }
        setLogin(false)
    }, [Login])


    return (
        <div className="container">
            <div className="container-items">
                <div className='phone-img'>
                    <img src={PhoneImage} alt="Phone" />
                </div>
                <form id="login" onSubmit={LoginSubmit}>
                    <div className='Form-login'>
                        <div className="input-box">
                            <h3 style={{ color: '#fff' }}><u>Login</u></h3>
                            <div className='input'>
                                <input type="email" id ="email" onChange={emailHandler} value={Email} autoComplete='off'  className="input-item" placeholder="Email" />
                                {/* <label className='label-name'><span className='content-name'>Email</span></label> */}
                            </div>
                            <div className='input'>
                                <input type="password" id="pass" onChange={passHandler} value={Pass}  autoComplete='off' className="input-item" placeholder="Password" />
                                {/* <label className='label-name'><span className='content-name'>Password</span></label> */}
                            </div>
                        </div>
                        <div className="login-btn" >
                            <input type='submit' className="submit-btn" value="Login" />

                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login;

