

function NewsCard({image}) {
    return (
        <div className="news__card">
            <div className="news__image">
                <img src={image} alt="" />
            </div>
            <div style={{
                    fontFamily: 'Lato',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    fontSize: '20px',
                    lineHeight: '30px',
                    color: '#000000',
            }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            </div>
        </div>        
    )
}

export default NewsCard;