import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { UserContext } from '../../App'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const history = useHistory();
  const handleButton = () => {
    history.push('/login')
  }
  return (
    
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home"><h1 className='text-danger'>Daily Shop</h1></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-area">
              <NavLink active className="p-3 fs-5" to="/">Home</NavLink>
              <NavLink active className="p-3 fs-5" to="/orders">Orders</NavLink>
              <NavLink active className="p-3 fs-5" to="/admin">Admin</NavLink>
              <NavLink active className="p-3 fs-5" to="/">Deals</NavLink>
              
            </Nav>
            {loggedInUser.email ? loggedInUser.name  : <button onClick={handleButton} className="btn btn-primary">LogIn</button>}
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
};

export default Header;


// {/* <h1>DAILY SHOP</h1>
// <nav>
// <ul>
// <li>
//   <Link to="/">Home</Link>
// </li>
// <li>
//   <Link to="/orders">Orders</Link>
// </li>
// <li>
//   <Link to="/admin">Admin</Link>
// </li>
// <li>
//   <Link to="/deals">Deals</Link>
// </li>
// 
// </ul>
// </nav> */}