import './main.css';
import Hello from "../Hello/Hello";
import Ourproducts from '../Ourproducts/Ourproducts';
import About from '../About/About';
import Contact from '../Contact/Contact';
import News from '../News/News';
import Login from '../Login/Login';
import Education from '../Education/Education';

function Main(params) {
    return (
        <main className="main">
            <Hello />
            <Ourproducts />
            <About />
            <Contact />
            <News />
            <Login />
            <Education />
        </main>
    )
}

export default Main;