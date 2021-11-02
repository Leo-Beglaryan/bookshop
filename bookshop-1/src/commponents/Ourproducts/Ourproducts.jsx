import './ourproducts.css';
import Cards from "../Card/Card";
import image1 from './ourproductsimages/1.png';
import image2 from './ourproductsimages/2.png';
import image3 from './ourproductsimages/3.png';
import image4 from './ourproductsimages/4.png';


function Ourproducts(params) {
    return (
        <section className="our-products">
            <div className="our-products__container">
                <div className="our-products__title">
                    Our Products
                </div>
                <div className="our-products__cards">
                    <Cards name="Young Adult" image={image1} className="none" />
                    <Cards name="Teen" image={image2} className="none" />
                    <Cards name="Kids" image={image3} className="none" />
                    <Cards name="Online Reading" image={image4}  className="none" />
                </div>
            </div>
        </section>
    )
}

export default Ourproducts;