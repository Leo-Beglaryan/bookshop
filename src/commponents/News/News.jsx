import NewsCard from "../NewsCard/NewsCard";
import  study from './newsimages/study.png';
import  paint from './newsimages/paint.png';
import  globus from './newsimages/globus.png';
import  paper from './newsimages/paper.png';
import Button from '@mui/material/Button';
import './news.css';

const NewsStyles = {
    Link: {
        position: 'absolute',
        width: '151px',
        height: '30px',
        fontFamily: 'Lato',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: '30px',
        letterSpacing: '0.1em',
        color: '#62750F',
    }
}

function News(params) {
    return (
        <div className="news">
            <div className="news__container">
                <div className="news__title">
                Our Latest News
                </div>
                <div className="news__content">
                    <NewsCard image={study} />
                    <NewsCard image={paint} />
                    <NewsCard image={globus} />
                    <NewsCard image={paper} />
                </div>
                <div className="news__link">
                    <Button href="#text-buttons" sx={NewsStyles.Link} >Read More</Button>
                </div>
            </div>
        </div>
    )
}


export default News;