import '../assets/CSS/layout.css';
import { flowers } from './FlowerDB';
import {useState} from 'react'

export default function Product(props){
  const [inputValue,setInputValue]=useState();
  const[cart,setCart]=useState([]); 
  
  const addCart = (flowerName,flowerPrice, quantity) => {
    
    const item = {
        flowerName: flowerName,
        flowerPrice:flowerPrice,
        quantity: parseInt(quantity),
    };

    const updatedCart = [...cart, item];
    setCart(updatedCart);
    props.setCart(updatedCart); 
};

    return(
        flowers.map(flower=>
        <div className="grid-item">

            <div class="card">
                <img  src={require('../assets/image/'+flower.img)}/>
                <div class="card-body">
                    <h5 class="card-title">{flower.name} Price:{flower.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" onChange={(e)=>setInputValue(e.target.value)}/>
                    </div>
                    <button class="card-button" onClick={()=>addCart(flower.name,flower.price,inputValue)}>Add to Cart</button>
                </div>
            </div>
        </div>
        )
    );
}