import './hello.css';
import books1 from './helloimages/main.png';
import facebook from './helloimages/face.png';
import instagram from './helloimages/insta.png';
import twitter from './helloimages/twitter.png';
import books2 from './helloimages/1440.png';
import books3 from './helloimages/1024.png';
import books4 from './helloimages/768.png';
import books5 from './helloimages/640.png';
import books6 from './helloimages/360.png';
import whitesearch from '../Hello/helloimages/whitesearch.png';



const iconMenu = document.querySelector('.hello__icon');
if(iconMenu) {
    const menu = document.querySelector('.hello__menu');
    iconMenu.addEventListener("click", function (e) {
        menu.classList.toggle('active');    
        iconMenu.classList.toggle('active');
    });
}

function Hello(params) {
    return (
        <section className="hello" >
            <div className="hello__menu" >
                <div className="menu__logo">
                    BOOKSHOP
                </div>
                <ul className="menu-burger__list">
                    <li><a href="">Products</a> </li>
                    <li><a href="">About Us</a></li>
                    <li><a href="">News</a></li>
                    <li><a href="">Services</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Sign Up</a></li>
                </ul>
                <div className="menu__search">
                    <img src={whitesearch} alt="" />
                </div>
            </div>
            <div className="hello__header">
                    <div className="hello__logo">
                        BOOKSHOP
                    </div>
                    <div className="hello__icon">
                        <span></span>
                    </div>
                </div>
            <div className="hello__container">
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
                
            </div>
            <img src={books1} alt=""  className="hello__background1"  />
                <img src={books2} alt=""  className="hello__background2"  />
                <img src={books3} alt=""  className="hello__background3"  />
                <img src={books4} alt=""  className="hello__background4"  />
                <img src={books5} alt=""  className="hello__background5"  />
                <img src={books6} alt=""  className="hello__background6"  />
        </section>
          
    )
}

export default Hello;