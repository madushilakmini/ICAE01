export default function Cart(props) {   
    let grandTotal = 0;
    for (const item of props.getCart) {
        grandTotal += item.quantity * item.flowerPrice;
    }
    return (
        <div className="table-container">
            <h4 className="card-title">Cart</h4>
            <table>
                <thead>
                  <tr>
                    <td>Product</td>
                    <td>QTY</td>
                    <td>Price</td>
                    </tr>
                </thead>
                <tbody>
                {props.getCart.map((item, index) => (
                 <tr key={index}>
                    <td>{item.flowerName}</td>
                    <td>{item.quanyity}</td>
                    <td>{item.quanyity*item.flowerPrice}</td>
                 </tr>  
                ))}
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>{grandTotal}</td>
                </tr>
            </tbody>
            </table>
           
        </div>
    );
}