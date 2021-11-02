import NewsCard from "../NewsCard/NewsCard";
import abc from './educationimages/abc.png';
import math from './educationimages/math.png';
import languages from './educationimages/languages.png';
import notes from './educationimages/notes.png';
import './education.css';


function Edu(params) {
    return (
        <section className="edu">
            <div className="edu__container">
                <div className="edu__title">
                Education
                </div>
                <div className="edu__content">
                    <NewsCard image={abc} />
                    <NewsCard image={math} />
                    <NewsCard image={languages} />
                    <NewsCard image={notes} />
                </div>
                <div className="edu__link-block">
                    <button type="submit" className="edu__link">Read More</button>
                </div>
            </div>
        </section>
    )
}


export default Edu;

