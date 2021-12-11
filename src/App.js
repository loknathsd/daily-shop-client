// import logo from './logo.svg';
import {createContext,useState} from 'react'
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Orders from './components/Orders/Orders';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import CheckOut from './components/CheckOut/CheckOut';
import Admin from './components/Admin/Admin';
// import AddProduct from './components/AddProduct/AddProduct';


export const UserContext = createContext()

function App() {
  const [loggedInUser ,setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
    <Router>
      <Header></Header>
      <Switch>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/orders">
            <Orders></Orders>
          </Route>
          <PrivateRoute path="/checkOut/:id">
              <CheckOut></CheckOut>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>
          <Route path="/">
            <Home></Home>
          </Route>
          
        </Switch>
    </Router>
    </UserContext.Provider>
  )
    
}

export default App;
