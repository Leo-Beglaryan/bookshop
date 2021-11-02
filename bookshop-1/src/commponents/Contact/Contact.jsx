import Input from '@mui/material/Input';
import * as React from 'react';
import Button from '@mui/material/Button';
import map from './contactimage/map.png';
import './contact.css';
const ariaLabel = { 'aria-label': 'description' };

const ContactStyles = {
    Input: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '18px',
        lineHeight: '22px',
        color: '#000000',
    },
    inputMargin: {
        margin: '29px 0px 0px 0px',
    },
    Button: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '30px',
        letterSpacing: '0.1em',
        textTransform: 'lowercase',
        color: '#62750F'
    }
}

function Contact(params) {
    return (
        <section className="contact">
            <div className="contact__container"> 
                <div className="contact__content">
                    <div className="contact__title">
                        Contact Us 
                    </div>
                    <div className="contact__check">
                        <Input placeholder="Name*"  className="contact__input"  />
                        <Input placeholder="E-mail*" className="contact__input" />
                        <Input placeholder="Message*"  className="contact__input" />
                    </div>
                    <div className="contact__messages">
                        140 characters
                    </div>
                    <div className="contact__link">
                        <Button href="#text-buttons" sx={ContactStyles.Button} >Send E-mail</Button>
                    </div>
                </div>    
                <div className="contact__map">
                    <img src={map} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Contact;