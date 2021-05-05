import React,{ useState, useEffect } from "react";
import CartHeader from "./CartHeader.js";
import CartFooter from "./CartFooter.js"
import CartItemList from "./CartItemList.js"



function Cart() {
    const [data, setData] = useState();
        const json = async () => {
        const dat = await fetch("data.json");
        const getJson = await dat.json()
        setData(getJson)
    };


    useEffect(() => {
        setTimeout(() => {
            json();
        }, 2000)
    }, []);


    function increase(id) {
       
        setData(data.map((el) => {
            if (el.id === id ) {
                 (el.quantity += 1 )
            }
            return el
        }))
    };

    function decrease(id) {
        setData(data.map((el) => {
            if (el.id === id && el.quantity>0) {
                el.quantity -= 1
            }
            return el
        }))
    }
    function changeInput(e) {
        // console.log('e        ',e.target)
        setData(data.map((el) => {
            if (el.id === +e.target.id && el.quantity>0) {
                el.quantity = +e.target.value;
            }
            return el
        }))
    }

    
       
        
    if (data && !data.length) {
            return (
                <div>
                    The Cart is Empty
                </div>
            )
    }


    return (
        <div className="Cart">
            <CartHeader />
            { data && < >  < CartItemList data={data.items}
                data={data}
                increase={increase}
                decrease={decrease}
               // removeItem={removeItem}               
                changeInput={changeInput} />
                {data && <CartFooter data={data}/>}               
            </>
            }
          
            </div>
    )

}


export default Cart;