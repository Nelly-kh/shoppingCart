import { useState } from "react";

function CartItem({ products, increase, decrease, setData, removeItem, onChange }) {

           return (
        <div className="CartItem">
            <div className="icone">
                <img src={products.image} alt="img" />
            </div>
            <div>
                <div>
                    <p> {products.name}</p>
                </div>
                
                   <div>
                       
                       {/* <p>{products.color}</p> */}
                       <div className="col" style={{ backgroundColor: products.color }}>
                           </div>
                </div>
                <div className="count">
                    {/* <select>
                        <option>1</option>
                        <option>2</option>
                    </select> */}
                           <button onClick={() => decrease(products.id)}>-</button>
                           <input type="number" id={products.id} value={products.quantity} onChange={onChange}/>
                           < button onClick={() => increase(products.id)}> + </button>
                </div>
            </div>
            <div>
                       <div > {products.price}  </div>
                      
                <div>
                    <button onClick={()=> setData(removeItem(products))} >&#x1F5D1;</button >
                </div>
            </div>
        </div>
    )
}

export default CartItem;