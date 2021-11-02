import './newsCard.css';

function NewsCard({image}) {
    return (
        <div className="news__card">
            <div className="news__image">
                <img src={image} alt="" />
            </div>
            <div className="news__text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
        </div>        
    )
}

export default NewsCard;