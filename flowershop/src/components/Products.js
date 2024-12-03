import Product from './Product'
import Cart from './Cart'
import '../assets/CSS/layout.css';


export default function Products(props){
   
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        //product
                        <Product/>
                    }
                </div>

            </div>
            <div className="item3">
                {
                //cart
                <Cart/>
                }
            </div>
        </>
    );

}