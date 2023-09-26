import React, {useState} from 'react';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import "./signIn.css";
import {Link, useNavigate } from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';

function SignIn() {
    const navigate = useNavigate();
    const auth = getAuth();
    const [loginUser, setLoginUser] = useState({
        email:"", password:""
    });
    const {email, password} = loginUser;

    // Handle Form
    const handleChange =(e)=>{
        const {name, value} = e.target;
        setLoginUser((prevFormData)=>({
            ...prevFormData, [name]:value,})
        );
    }

    // Register user
    const register =(e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            if(auth){
                navigate('/')
            }
        })
        .catch((error)=>{
            // const errorCode = error.code
            const errorMessage = error.message
            console.log(errorMessage)
        })
    }

    // Login user
    const logIn =(e)=>{
        e.preventDefault();
       signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            // const user = userCredential.user
            navigate('/')
        })
        .catch((error) => {
            // const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
          });
    }
  return (
    <div className="signIn">
        <Link to="/" className="signIn__logo">
            <StorefrontIcon className="signIn__logoImg" fontSize="large"/>
            <h2 className="signIn__logoTitle">eShop</h2>
        </Link>
        <div className="signIn__container">
            <form action="" className="form">
                <h3>Sign In</h3>
                <div className="form__group">
                    <input type="text" name="email" value={email} id ="email" className="form__field" placeholder="Email" onChange={handleChange}/>
                </div>
                <div className="form__group">
                    <input type="text" name="password" value={password} id ="password" className="form__field" placeholder="Password" onChange={handleChange}/>
                </div>
                <button type="submit" className="btn signInBtn" onClick={logIn}>
                    Sign In
                </button>
            </form>
            <p className="">
                By Signing in agree to the eShop 
                website conditions of Use & Sale. Please see your website for
                Privacy Notice. Our Cookies Notice and our Interest based Ads notice.
            </p>
            <button type="submit" className="btn signUpBtn" onClick={register}>
                Sign Up
            </button>
        </div>
    </div>
  )
}

export default SignIn;
