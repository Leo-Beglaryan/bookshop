import './card.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {CardActionArea, CardActions} from '@mui/material';


function Cards({name, image}) {
    return (
        <Card className="card">
            <CardActionArea>
                <CardMedia
                    component="img"
                    className="card__image"
                    image={image}
                />
                <CardContent className="cardContent" sx={{padding: '0px', marginTop: '20px'}}>
                    <div className ="card__title">
                        {name}
                    </div>
                    <div className="card__subtitle">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </div>
                </CardContent>
            </CardActionArea>
                <CardActions className="learnMore" sx={{padding:'0px', marginTop: '20px'}}>
                <button className="card__Link" >
                    Learn More
                </button>
            </CardActions>
      </Card>
    )
}

export default Cards;