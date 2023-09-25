import React, {useState, useEffect} from 'react';
import "./home.css";
import Product from '../../Components/Product/product';

const produtsApi = "https://dummyjson.com/products";

function Home(){
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        const getProducts = async()=>{
            const res = await fetch(produtsApi);
            const data = await res.json();
            setProducts(data.products);
        }
        getProducts();
    },[])

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
                products.map((product,id)=>{
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
