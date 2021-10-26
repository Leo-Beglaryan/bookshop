import './header.css';
import search from './headerimages/1.png';


function Header () {

    return (
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    BOOKSHOP
                </div>
                <div className="menu">
                    <nav className="menulist">
                        <li><a href="">Products</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">News</a></li>
                        <li><a href="">Services</a></li>
                    </nav>
                </div>
                <div className="header__inform">
                    <div  className="header__inform-search">
                        <img src={search} alt="" />
                    </div>
                    <a href="" className="header__login">
                        Login
                    </a>
                    <a href="" className="header__signup">
                        SignUp
                    </a>
                </div>
            </div>
        </header>
    )
}

export default Header;