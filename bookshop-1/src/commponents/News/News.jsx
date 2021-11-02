import NewsCard from "../NewsCard/NewsCard";
import  study from './newsimages/study.png';
import  paint from './newsimages/paint.png';
import  globus from './newsimages/globus.png';
import  paper from './newsimages/paper.png';
import './news.css';


function News(params) {
    return (
        <section className="news">
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
                <div className="news__link-block">
                    <button className="news__link">Read More</button>
                </div>
            </div>
        </section>
    )
}


export default News;