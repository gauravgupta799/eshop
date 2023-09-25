import React from 'react';
import "./subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useSelector} from "react-redux";
import {getBasketTotal} from "../../Redux/Reducers/reducer"

function Subtotal() {
  const products = useSelector((state)=>state.reducer.basket);
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) =>(
            <>
                <p>
                    Subtotal ({products.length} items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox"/> 
                    <span>This order contains a gift</span>
                </small>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(products)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed To Checkout</button>
    </div>
  )
}

export default Subtotal
