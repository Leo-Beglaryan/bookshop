import './hello.css';
import books from './helloimages/main.png';
import facebook from './helloimages/face.png';
import instagram from './helloimages/insta.png';
import twitter from './helloimages/twitter.png';

function Hello(params) {
    return (
        <section className="hello" >
                <div className="hello__header">
                    <div className="hello__logo">
                        BOOKSHOP
                    </div>
                    <div className="hello__icon">
                        <span></span>
                    </div>
                </div>
                <div className="hello__title">
                    Easy. Fast. Smart.
                </div>
                <div className="hello__subtitle-1">
                    A Great Sourse Of Reading.
                </div>
                <div className="hello__subtitle-2">
                    And Study Materials.
                </div>
                <div className="hello__links">
                    <a href="https://www.twitter.com/"><img src={twitter} alt="" /></a>
                    <a href="https://www.instagram.com/"><img src={instagram} alt="" /></a>
                    <a href="https://www.facebook.com/"><img src={facebook} alt="" /></a>
                </div>
                <img src={books} alt=""  className="hello__background"  />
        </section>
          
    )
}

export default Hello;