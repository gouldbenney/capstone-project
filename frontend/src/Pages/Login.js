import React, { useState } from 'react';
import '../Styles/Login.css';
import {Link, useHistory} from 'react-router-dom'


function Login( {handleLoginstate} ) {

    const [email, setEmail]=useState(''),
    [alert, setAlert] = useState(''),
    
    [password,setPassword] =useState(''),history =useHistory()

    function handleEmail(e){
        setEmail(e.target.value)  
       }
      
       function handlePassword(e){
        setPassword(e.target.value)  
       }
  
    function handleLoginClick(e){
        e.preventDefault()
        let users = JSON.parse(localStorage.getItem('users'))
        console.log(users)
        if(users !==null){
             let userEmail = users['Gould'].email
             let userPassword= users['Gould'].password
             console.log(userPassword)
            if (email===userEmail && password===userPassword){
                handleLoginstate(true, userEmail)
                history.push('/')
            }
            else
               setAlert('Wrong email or password') 
         }
         else
            setAlert('Unknown user..Signup')
        }

    return(
        <>
        <div className='Login'>
            <Link to='/'>
                <img 
                className='Login__logo' alt='logo' 
                src="/images/img2.jpeg"
                />
            </Link>
            <div className='Login__container'>
                <h1>Sign In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='email' value={email} onChange={handleEmail}/>
                    <h5>Password</h5>
                    <input type='password' value={password} onChange={handlePassword}/>
                    <br/>
                    <button type='submit' className='Login__signInButton' onClick={handleLoginClick} > Sign In </button>
                </form>
                <p>By signing in, you agree to Aurum Market's terms and conditions</p>
                <button className='login__registerButton'> <Link  to='/signup'> </Link>New? Create your Aurum Market Account Here</button>
            </div>
        </div>
        </>
    )
}

export default Login