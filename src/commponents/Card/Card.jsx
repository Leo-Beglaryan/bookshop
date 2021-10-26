import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { height } from '@mui/system';

const CardStyles = {
    Card: {
        width: '430px',
        height: '450px',
        background: '#FFFFFF',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
    }
}

function Cards({name, image}) {
    return (
        <Card sx={{ 
            maxWidth: "430px",
            height: '450px',
            padding: '20px',
            }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    width = '390px'
                    height = '211px'
                    image={image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="div" 
                    sx={{
                        fontFamily:'Cormorant Infant',
                        fontStyle:'normal',
                        fontWeight: 'bold',
                        fontSize: '30px',
                        lineHeight: '36px',
                        color: '#000000',
                        padding: '0px',
                    }}>
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx = {{
                        fontFamily: 'Lato',
                        fontStyle: 'normal',
                        fontWeight: 'normal',
                        fontSize: '20px',
                        lineHeight:'30px',
                        color: '#000000',
                    }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Typography>
                </CardContent>
                </CardActionArea>
                <CardActions className="learnMore">
                <Button size="small" color="primary" sx={{
                            fontFamily: 'Lato',
                            fontStyle: 'normal',
                            fontWeight: 'bold',
                            fontSize: '20px',
                            lineHeight: '30px',
                            letterSpacing: '0.1em',
                            color: '#62750F',
                            margin: '0px 0px 0px 220px',
                            padding: '0px'
                }} >
                    Learn More
                </Button>
            </CardActions>
      </Card>
    )
}

export default Cards;