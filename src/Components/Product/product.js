import React from 'react';
import "./product.css"
// import StarIcon from '@mui/icons-material/Star';
import { useDispatch} from 'react-redux';
import { addToBasket } from '../../Redux/Actions/AddToBasket/addToBasket';

function Product({product}) {
    const { title, description,price,rating, thumbnail,} = product;
    const dispatch = useDispatch();

  return (
    <div className="product">
       <figure className="product__figure">
            <img src={thumbnail} alt={title} loading="lazy"/>
        </figure>
        <div className="product__info">
            <h3 className="product__title">{title}</h3>
            <p className="product__desc">{description}</p>
            <p className="product__price">
                Price: ${price}
            </p>
            <div className="product__rating">
                <p>Rating: {rating}</p>
            </div>
        </div> 
     
        <div className="product__btnWrapper">
            <button onClick={()=>dispatch(addToBasket(product))}>Add To Basket </button>
        </div>
    </div>
  )
}

export default Product;
