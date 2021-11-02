import * as React from 'react';
import loginback from './loginimages/login.png';
import Checkbox from '@mui/material/Checkbox';
import './login.css';
import login375 from './loginimages/login375.png'

function Login(params) {
    return (
        <section className="login">
           <div className="login__container">  
                    <div className="login__title">
                        Keep in touch!
                    </div>
                    <div className="login__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                    <div className="login__subscribe-box">
                        <div className="login__subscribe-form" >
                            <input type="text" placeholder="Your Email Address*" className="login__input" />
                            <button variant="contained" color="success" className="login__button">
                                Subscribe
                            </button>
                        </div>
                        <div className="login__checkbox-block">
                            <Checkbox  color="success" className="login__checkbox" />
                            <span> I agree to the terms { "&" } conditions </span>
                        </div>
                    </div>
            </div>  
            <img src={loginback} alt="" className="login__background1" />
            <img src={login375} alt="" className="login__background2" />
        </section>
    )   
}

export default Login;