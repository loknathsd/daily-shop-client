import React from 'react';
import './Product.css'
import { useHistory } from 'react-router-dom';

const Product = (props) => {
    // console.log(props.pd)
    const {name,price,weight ,imageURL,_id} = props.pd;
    const history = useHistory();
    const handleBuyNow = (id) => {
        history.push(`/checkOut/${id}`);
    }
    return (
        <div className="product-area">
            <img style={{height:'200px'}} src={imageURL} alt="" />
            <h5>{name} - {weight}</h5>
            <div className="row mt-4">
                <div className="col-md-6">
                    <h3 style={{color:'palevioletred',fontWeight:'bold'}}>${price}</h3>
             </div>
                <div className="col-md-6">
                <button onClick={()=>handleBuyNow(_id)} className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;