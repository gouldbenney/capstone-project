import React from 'react';
import '../Styles/Login.css';
import {Link} from 'react-router-dom'

function Login(){
    return(
        <div className='Login'>
            <Link >
                <img className='Login__logo' alt='logo' src="/images/img2.jpeg" />
            </Link>
            <div className='Login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input type='email'/>
                    <h5>Password</h5>
                    <input type='password'/>
                    <br/>
                    <button type='submit' className='Login__signInButton'> Sign In </button>
                </form>
                <p>By signing in, you agree to Aurum Market's terms and conditions</p>
                <button className='login__registerButton'> New? Create your Aurum Market Account Here</button>
            </div>
        </div>
    )
}

export default Login