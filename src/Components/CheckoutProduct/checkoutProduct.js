import React from 'react'
import "./checkoutProduct.css";
// import StarIcon from '@mui/icons-material/Star';y
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {useSelector, useDispatch } from 'react-redux';
import {removeFromBasket} from "../../Redux/Actions/AddToBasket/addToBasket"

function CheckoutProduct() {
  const items = useSelector((state)=>state.reducer.basket);
  const dispatch = useDispatch();

  return (
    <div>
    {items.map((item)=>{
      const{id, title, price, thumbnail, rating} = item;
      return(
        <div className="checkoutProduct">
          <div className="checkoutProduct__left">
            <figure className="checkoutProduct__figure">
              <img src={thumbnail} alt={title} loading="lazy"/>
            </figure>
            <div className="checkoutProduct__info">
              <p className="chekoutProduct__title">{title}</p>
              <p className="checkoutProduct__price">
                <strong>Price: ${price}</strong>
              </p>
              <div className="checkoutProduct__rating">
              <h3>Rating: {rating}</h3>
              </div>
            </div>
          </div>
          <div className="checkoutProduct__right">
              <div className="addDecBtn__wrapper">
                <button><AddIcon/></button>
                <button><RemoveIcon/></button>
              </div>
              <div className="removeProduct-wrapper">
                  <button onClick={()=>dispatch(removeFromBasket(id))}>Remove from cart</button>
              </div>
          </div>
        </div>
      )
    })}
    </div>
  )
}

export default CheckoutProduct
