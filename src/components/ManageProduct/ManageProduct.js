import React, { useEffect, useState } from 'react';

const ManageProduct = () => {
    const [products, setProducts] = useState([])

    const handleDeleteButton=(id)=>{
        fetch(`https://frozen-citadel-19738.herokuapp.com/delete/${id}`,{
            method : 'DELETE'
        })
        .then(res=>res.json())
        .then(result =>{
            console.log('data is deleted successfully')
        })

    }

    useEffect(() => {
        fetch('https://frozen-citadel-19738.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h4 style={{marginLeft:'20px'}}>Manage Products</h4>
            <table style={{width:'85%',margin:'auto',marginTop:'10px'}} className="table ">
                <thead>
                    <tr>
                        <th scope="col">Product Name</th>
                        <th scope="col">Weight</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(pd =>
                            <tr>
                                <td>{pd.name}</td>
                                <td>{pd.weight}</td>
                                <td>{pd.price}</td>
                                <td><button onClick={()=>handleDeleteButton(pd._id)} className="btn btn-primary btn-sm">Delete</button></td>
                            </tr>
                        )
                    }

                </tbody>
            </table>

        </div>
    );
};

export default ManageProduct;