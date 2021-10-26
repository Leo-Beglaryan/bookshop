import './main.css';
import Hello from "../Hello/Hello";
import Ourproducts from '../Ourproducts/Ourproducts';
import About from '../About/About';
import Contact from '../Contact/Contact';
import News from '../News/News';

function Main(params) {
    return (
        <main className="main">
            <Hello />
            <Ourproducts />
            <About />
            <Contact />
            <News />
        </main>
    )
}

export default Main;