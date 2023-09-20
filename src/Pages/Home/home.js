import React from 'react';
import "./home.css";
import Product from '../../Components/Product/product';

const productsJSON = [
    {
        id:1,
        title:"Product 1 abc",
        price:"49",
        rating:"4",
        image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
        id:2,
        title:"Product 2 cde",
        price:"29",
        rating:"3",
        image:"https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb",
    },
    {
        id:3,
        title:"Product 3 efg",
        price:"10",
        rating:"4.1",
        image:"https://petapixel.com/assets/uploads/2017/03/product1.jpeg",
    },
    {
        id:4,
        title:"Product 4 ghi",
        price:"50",
        rating:"4.5",
        image:"https://res.cloudinary.com/hamstech/images/f_auto,q_auto/w_2560,h_1707/v1622391793/Hamstech%20App/TITLE-IMAGE-6-1_8045265325492/TITLE-IMAGE-6-1_8045265325492.jpg",
    },
    {
        id:5,
        title:"Product 1 ijk",
        price:"11.2",
        rating:"3.3",
        image:"https://expertphotography.b-cdn.net/wp-content/uploads/2020/09/rules-for-product-photography.jpg",
    },
    {
        id:6,
        title:"Product 1 klm",
        price:"50",
        rating:"5",
        image:"https://images.pexels.com/photos/3766111/pexels-photo-3766111.jpeg?auto=compress&cs=tinysrgb",
    },
    {
        id:7,
        title:"Product 1 mno",
        price:"8",
        rating:"4.1",
        image:"https://cdn.shopify.com/s/files/1/0608/7874/9892/products/7xwJN-sLtA-8905566215221_7.webp?v=1686914546",
    },
    {
        id:8,
        title:"Product 1 opq",
        price:"60",
        rating:"4.4",
        image:"https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
        id:9,
        title:"Product 1 qrs",
        price:"16",
        rating:"4",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpp7JZN_voM95GSpUBMWkJsAw4pPzrazJWOg&usqp=CAU",
    },
    {
        id:10,
        title:"Product 1 stu",
        price:"12",
        rating:"5",
        image:"https://upload.wikimedia.org/wikipedia/commons/1/1f/Product_photography.jpg",
    },
]

function Home() {
  return (
    <section className="home">
        <div className="home__hero">
            <figure>
                <img src="https://omtechnoware.com/data/844cccb4-da47-45fc-a180-11bc9c86be49.jpg" alt="" />
            </figure>
        </div>
        <div className="home__container">
            <div className="home__row">
            {
                productsJSON.map((product,id)=>{
                    return(
                        <Product product = {product} key={id} />
                    )
                })
            }
            </div>
        </div>
    </section>
  )
}

export default Home
