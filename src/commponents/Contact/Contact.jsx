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
        <div className="contact">
            <div className="contact__container"> 
                <div className="contact__content">
                    <div className="contact__title">
                        Contact Us 
                    </div>
                    <div className="contact__check">
                        <Input placeholder="Name*" sx={ContactStyles.Input} inputProps={ariaLabel} />
                        <Input placeholder="E-mail*" sx={ContactStyles.Input, ContactStyles.inputMargin} inputProps={ariaLabel} />
                        <Input placeholder="Message*" sx={ContactStyles.Input, ContactStyles.inputMargin} inputProps={ariaLabel} />
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
        </div>
    )
}

export default Contact;