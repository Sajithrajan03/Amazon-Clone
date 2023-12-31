import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 
import "./Login.css"
import { auth } from "../firebase"

function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
  const navigate = useNavigate();
    const signin = e =>{
    e.preventDefault();
     
    auth.signInWithEmailAndPassword(email,password)
    .then((auth) =>{
        if (auth){
            navigate("/");
        }
    })
    .catch(error => alert(error.message))
  }
  const register = e =>{
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password)
    .then((auth) =>{
        if (auth){
            navigate("/");
        }
    })
    .catch(error => alert(error.message))
  }

    return (
    <div className='login'>
        <Link to="/">

        <img  className="login_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
        </Link>

        <div className="login_container">
            <h1>Sign-In</h1>
            <form action="">
                <h5>E-Mail</h5>
                <input type="text" value={email} onChange={e=> setEmail(e.target.value)} />
                <h5>Password</h5>
                <input type="password"  value={password} onChange={e=> setPassword(e.target.value)}  />
                <button type="submit" onClick={signin} className='login_signin'>Sign-In</button>
            </form>
            <p>
            By continuing, you agree to Amazon Clone's Conditions of Use and Privacy Notice.
            </p>

            <button type="submit" onClick={register} className='login_register'>Create your Amazon Account</button>
        </div>
    </div>
  )
}

export default Login
