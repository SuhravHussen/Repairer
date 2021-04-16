import React, { useContext } from 'react';
import img from '../../Images/google.png'
import './Login.css'
import firebaseConfig from "./firebaseConfig";
import firebase from "firebase/app";
import "firebase/auth";
import { useHistory, useLocation } from 'react-router';
import { userContext } from '../../App';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  var provider = new firebase.auth.GoogleAuthProvider();

  const Login = () => {
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    
    const [userInfo , setUserInfo] = useContext(userContext)

    const handleSignIn = ()=>{
        firebase
          .auth()
          .signInWithPopup(provider)
          .then((result) => {  
            const {email , displayName ,photoURL} = result.user
             setUserInfo({
                 name: displayName,
                 email: email,
                img:photoURL,
             })
            history.replace(from);
            
          })
          .catch((error) => {
            
          });
      };
        



    return (
        <div className="login-container">
        <button onClick={handleSignIn} className="google-button">Sign in using <img src={img} alt=""/></button>
     </div>
    );
};

export default Login;