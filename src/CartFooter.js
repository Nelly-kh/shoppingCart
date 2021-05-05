function CartFooter(props) {
    let sum = sumProducts(props.data)
        function sumProducts(data) {
        return data.reduce(function (accum, el) {
            let price = el.price.substring(1, el.price.length);
                     console.log(accum += price* el.quantity)
return accum
        }, 0)
   
}
    
    return (
        <div className="CartFooter">
          <div className="sub">
            <p>Subtotal:</p>
                <span>{sum} </span>
                </div>
<div className="but">
            <button>Checkout</button>
</div>
    </div>

)
};




export default CartFooter;