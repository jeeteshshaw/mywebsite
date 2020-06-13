import React, { useState, useEffect } from 'react'
import BannerImage from './signup_banner.png';
import './style.css'

function Signup() {
    const [FormSubmit, setFormSubmit] = useState(false)
    const [Error, setError] = useState({
        email:'',
        password:''
    })

    
    const [User, setUser] = useState({
        name: '',
        email: '',
        password: '',
    });
    const [cpass, setcpass] = useState('');

    const nameHandler = (text)=>{
        setUser({
            name: text.target.value.trim(),
            email: User.email,
            password: User.password
        });
    }
    const emailHandler = (text)=>{
        setUser({
            name: User.name,
            email: text.target.value.trim(),
            password: User.password
        })
    }
    const passwordHandler = (text)=>{
        setUser({
            name: User.name,
            email: User.email,
            password: text.target.value.trim()
        });
    }
    const cpasswordHandler = (text)=>{
        setcpass((text.target.value).trim());
        
    }
    const SignupHandler = (e)=>{
        e.preventDefault();
        
        if(User.password === cpass){
            setFormSubmit(true);
        }else{
            setError({
                password: 'Password not matched'
            })
        }
    }

    const sendForm = async()=>{
        const api = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(User)
        };
        fetch('http://localhost:9000/users/signup', api)
        .then(res => res.json())
        .then(res => {
            const { error } = res;
            if(error)
            setError({
                email: error
            })
            else{
                sessionStorage.setItem('user_token', (res.token).toString());
                window.location.replace(`/user/welcome/${User.name}`)
            }
        });
        
    }
    useEffect(() => {
        if(FormSubmit === true){
            sendForm();
            setFormSubmit(false)
        }
    }, [FormSubmit])

    return (
        <div className='container'>
            <div className='container-list'>
                <div className='img'>
                    <img src={BannerImage} alt='SignupImage' />
                </div>
                <div className='form'>
                    <div>
                        <form onSubmit= {SignupHandler}>
                            <h1>SignUp</h1>
                            <div className='input'>
                                <input type="text" id="name" onChange={nameHandler} value={User.name} autoComplete='off' minLength='6' className="input-item" placeholder="Name" required/>
                            </div>
                            <div className='input'>
                                <input type="email" id="email" onChange={emailHandler} value={User.email} autoComplete='off'  className="input-item" placeholder="Email" required/>
                            </div>
                            <label className='label-name'><span className='content-name'>{Error.email}</span></label>

                            <div className='input'>
                                <input type="password" id="password"  minLength='6' onChange={passwordHandler} value={User.password} autoComplete='off'  className="input-item" placeholder="Password" required/>
                            </div>
                            <label className='label-name'><span className='content-name'>{Error.password}</span></label>

                            <div className='input'>
                                <input type="password" id="cpassword"  minLength='6'  onChange={cpasswordHandler} value={cpass} autoComplete='off'  className="input-item" placeholder="Comfirm Password" required/>
                            </div>
                            <div className='input'>
                                <input type="submit" value="Signup" className="submit-btn" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
