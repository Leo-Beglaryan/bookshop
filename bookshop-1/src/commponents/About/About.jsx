import library from './aboutimage/library.png';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import {CardActionArea, CardActions } from '@mui/material';
import './about.css';



function About(params) {
    return (
        <section className="about">
            <div className="about__container" >
                <div className="about__image">
                    <img src={library} alt="library" />
                </div>
                <Card className='about__card'>
                    <CardActionArea>
                        <CardContent  className="about__content" sx={{padding:'0px'}}>
                        <div className="about__title">
                            About Us
                        </div>
                        <div className="about__subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Varius viverra volutpat augue vitae sed id eget urna.
                        Ut aliquam mauris elementum purus. Pulvinar amet,
                        vulputate faucibus aliquet. Vulputate tincidunt nunc massa ac. 
                        </div>
                        </CardContent>
                    </CardActionArea>
                    <button className="about__button">
                            Learn More
                    </button>
                </Card>
            </div>
        </section>
    )
}

export default About;