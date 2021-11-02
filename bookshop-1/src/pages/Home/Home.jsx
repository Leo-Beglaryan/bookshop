import './home.css';
import Header from '../../commponents/Header/Header';
import Main from '../../commponents/Main/Main';
import Footer from '../../commponents/Footer/Footer';

function Home(params) {
    return (
        <div className="home">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Home;