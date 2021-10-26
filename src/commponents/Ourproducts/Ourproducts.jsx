import Cards from "../Card/Card";
import image1 from './ourproductsimages/1.png';
import image2 from './ourproductsimages/2.png';
import image3 from './ourproductsimages/3.png';
import image4 from './ourproductsimages/4.png';
import './ourproducts.css';

function Ourproducts(params) {
    return (
        <div className="our-products">
            <div className="our-products__container">
                <div className="our-products__title">
                    Our Products
                </div>
                <div className="our-products__cards">
                    <Cards name="Young Adult" image={image1}  />
                    <Cards name="Teen" image={image2} />
                    <Cards name="Kids" image={image3} />
                    <Cards name="Online Reading" image={image4}  />
                </div>
            </div>
        </div>
    )
}

export default Ourproducts;