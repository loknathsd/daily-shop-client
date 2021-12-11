import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';

const Orders = () => {
    const [orders,setOrders] = useState([])
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)

   useEffect(()=>{
    fetch('https://frozen-citadel-19738.herokuapp.com/orders?email='+loggedInUser.email)
    .then(res=>res.json())
    .then(data => setOrders(data))
   },[])
    return (
        <div style={{width:'60%' ,margin:'auto', marginTop:'60px'}}>
            <h1 style={{textAlign:'center'}}>All Orders</h1><hr />
            {
                orders.map(order =><li>Email : {order.email} -- Product name: {order.name} - Price : {order.price}</li>)
            }
        </div>
    );
};

export default Orders;