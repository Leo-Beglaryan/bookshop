import './home.css';
import Header from '../../commponents/Header/Header';
import Main from '../../commponents/Main/Main';

function Home(params) {
    return (
        <div className="home">
            <Header />
            <Main />
        </div>
    )
}

export default Home;