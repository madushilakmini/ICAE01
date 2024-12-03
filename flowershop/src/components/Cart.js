export default function Cart(props) {
    
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
                {
                 <tr>
                    <td>{item.flowerName}</td>
                    <td>{item.quanyity}</td>
                    <td>{item.quanyity*item.flowerPrice}</td>
                 </tr>  
                }
                <tr>
                    <td >Grand Total : </td>
                    <td colSpan={2}>Grand Total</td>
                </tr>
            </tbody>
            </table>
           
        </div>
    );
}