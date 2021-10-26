import library from './aboutimage/library.png';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './about.css';

const AboutStyles = {
    Card: {
        width: '752px',
        height: '369px',
        background: '#FFFFFF',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
        margin: '69px 0px 0px -172px',
        zIndex: 100,
        padding: '50px 0px 0px 45px',
    },
    Title: {
        fontFamily: "Cormorant Infant",
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '40px',
        lineHeight: '48px',
        color: '#000000',
    },
    Subtitle: {
        width: '648px',
        height: '90px',
        fontFamily: 'Cormorant Infant',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '20px',
        lineHeight: '150%',
        color: '#000000',
        padding: '0px 0px 0px 0px',
    },
    Button: {
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '30px',
        letterSpacing: '0.1em',
        color: '#62750F',
        margin: '20px 0px 0px 514px',
    },
    Cardcontent: {
        padding: '0px 0px 0px 0px',
    }
}

function About(params) {
    return (
        <div className="about">
            <div className="about__container" >
                <div className="about__image">
                    <img src={library} alt="library" />
                </div>
                <Card sx={AboutStyles.Card}>
                    <CardActionArea>
                        <CardContent  sx={AboutStyles.Cardcontent}>
                        <Typography gutterBottom variant="h5" component="div" sx={AboutStyles.Title}>
                            About Us
                        </Typography>
                        <Typography variant="body2" color="text.secondary" sx={AboutStyles.Subtitle}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Varius viverra volutpat augue vitae sed id eget urna.
                        Ut aliquam mauris elementum purus. Pulvinar amet,
                        vulputate faucibus aliquet. Vulputate tincidunt nunc massa ac. 
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" sx={AboutStyles.Button} >
                            Learn More
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default About;