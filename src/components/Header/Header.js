import React,{useContext} from 'react';
import { useHistory } from 'react-router';
import {UserContext} from '../../App'
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
  const [loggedInUser,setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const handleButton =()=>{
      history.push('/login')
  }
    return (
        <div className="container mt-4 head-area">
            <h1>DAILY SHOP</h1>
            <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
            <li>
              <Link to="/deals">Deals</Link>
            </li>
            {loggedInUser.email ? loggedInUser.name  : <button onClick={handleButton} className="btn btn-primary">LogIn</button>}
          </ul>
        </nav>
        <hr />
        </div>
    );
};

export default Header;