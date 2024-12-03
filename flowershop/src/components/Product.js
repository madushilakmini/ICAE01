import '../assets/CSS/layout.css';
import { flowers } from './FlowerDB';
export default function Product(props){
    
    return(
        flowers.map(flower=>
        <div className="grid-item">

            <div class="card">
                <img  src={require('../assets/image/'+flower.img)}/>
                <div class="card-body">
                    <h5 class="card-title">Price:</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" />
                    </div>
                    <button class="card-button">Add to Cart</button>
                </div>
            </div>
        </div>
        )
    );
}