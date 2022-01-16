import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CheckOut.css'
import { UserContext } from '../../App'


const CheckOut = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    const handleCheckOut = () => {
        const order = { ...loggedInUser, ...product }
        fetch('https://frozen-citadel-19738.herokuapp.com/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(order)
        })
            .then(data => {
                alert('Ordered successful')
               
            })


    }

    useEffect(() => {
        fetch('https://frozen-citadel-19738.herokuapp.com/product/' + id)
            .then(res => res.json())
            .then(data => setProduct(data))

    }, [])

    return (
        <div className="checkOut-area">
            <div className='container '>
                <div className="row">
                    <div className="col-md-6 shadow p-5 mx-auto mt-5">
                        <h2 className='text-center mb-5'>CHECK OUT</h2>
                        <table className="table table-area">
                            <thead>
                                <tr>
                                    <th scope="col">Description</th>
                                    <th scope="col">Quantity</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{product.name}</td>
                                    <td>  1 </td>
                                    <td>${product.price}</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>-</td>
                                    <td></td>
                                </tr>
                                <tr>
                                    <td>Total</td>
                                    <td>1</td>
                                    <td>= ${product.price}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button onClick={handleCheckOut} className="btn btn-primary">CheckOut</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;