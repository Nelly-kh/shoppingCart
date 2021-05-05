import CartItem from "./CartItem.js"

function CartItemList({data,increase, decrease,  changeInput}) {
     if (!data.length) {
            return (
                <div>
                    The Cart is Empty
                     
                </div>
            )
    }
        return (
            <div className="CartItemList">
            {data && data.map((el, i) => {
                return (
                    <CartItem key={i} products={el}
                        increase={increase}
                        decrease={decrease}
             
                        onChange={changeInput} />
                   
    )
})}

        </div>
    )


}

export default CartItemList;
