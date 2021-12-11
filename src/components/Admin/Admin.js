import React from 'react';
import './Admin.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import AddProduct from '../AddProduct/AddProduct';
import ManageProduct from '../ManageProduct/ManageProduct';

const Admin = () => {
    const { path,url } = useRouteMatch();
    return (
        <div className="container">
            <div className="row" >
                
                <div className="col-md-3 bg-success admin-items">
                <h1>Admin Panel</h1>
                    <nav>
                        <ul>
                            <li><Link to={`${url}/addProduct`}>Add Product</Link></li>
                            <li><Link  to={`${url}/manageProduct`}>Manage Product</Link></li>
                            <li><Link to={`${url}/editProduct`}>Edit Product </Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="col-md-9">
                     <Switch>
                         <Route exact path={path}>
                         <AddProduct></AddProduct>
                         </Route>
                         <Route path={`${path}/addProduct`}>
                             <AddProduct></AddProduct>
                         </Route>
                         <Route path={`${path}/manageProduct`}>
                             <ManageProduct></ManageProduct>
                         </Route>
                     </Switch>
                 
                </div>
            </div>
        </div>
    );
};

export default Admin;