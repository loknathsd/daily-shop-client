import React, { useContext } from 'react';
import {useHistory,useLocation} from 'react-router-dom'
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import {UserContext} from '../../App'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const app = initializeApp(firebaseConfig);
const Login = () => {
    const provider = new GoogleAuthProvider();
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const history = useHistory()
    const location = useLocation()
    const {from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = () => {

        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                const {displayName,email,photoURL} = user;
                const userInfo = {name :displayName , email}
                setLoggedInUser(userInfo)
                history.replace(from);
            }).catch((error) => {

                const errorCode = error.code;
                const errorMessage = error.message;


            });
    }
    return (
        <div style={{ textAlign: 'center', marginTop: '100px' }}>
            <h2> Hello  sir, first of all you have to login </h2>
            <button onClick={handleGoogleSignIn} className="btn btn-secondary mt-5">SignIn with Google</button>
        </div>
    );
};

export default Login;