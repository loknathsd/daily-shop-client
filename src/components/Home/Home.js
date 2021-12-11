import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Home.css'

const Home = () => {
    const [products,setProducts] = useState([]);
   
    useEffect(()=>{
        fetch('https://frozen-citadel-19738.herokuapp.com/products')
        .then(res=>res.json())
        .then(data => setProducts(data))
        .catch(error =>console.log(error))
    },[])
    return (
        <div>
            <div className="search-area d-flex">
                <input className="form-control" type="text" />
                <button className="btn btn-primary">Search</button>
            </div>
            <div className=" products-area">
            {
                products.map(pd => <Product pd={pd}></Product>)
            }
        </div>
        </div>
    );
};

export default Home;