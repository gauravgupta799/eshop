import React from 'react';
import "./product.css"
import StarIcon from '@mui/icons-material/Star';
// import StarBorderIcon from '@mui/icons-material/StarBorder';

function Product({product}) {
    const {id, title, price, rating, image} = product;
    console.log(product)
  return (
    <div className="product">
        <div className="product__info">
            <p className="product__title">{title}</p>
            <p className="product__price">
                <small>$</small><strong>{price}</strong>
            </p>
            <div className="product__rating">
            {Array(rating).fill().map((_, i) =><p><StarIcon/></p>)}
            </div>
        </div> 
        <figure className="product__figure">
            <img src={image} alt={title}/>
        </figure>
        <div className="product__btnWrapper">
            <button>Add To Basket </button>
        </div>
    </div>
  )
}

export default Product;
