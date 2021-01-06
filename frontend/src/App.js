import React, { useState } from 'react';
import './App.css';
import Header from './Pages/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignUp from './Pages/SignUp'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Checkout from './Pages/Checkout'
import Footer from './Components/Footer'
import { useStateValue } from './Components/StateProvider'

function App () {
    const [isLogin,setLoginState] =useState(false)
  const [authUser,setAuthUser] =useState("");

  function handleLoginstate(isLogin, user) {
    setLoginState(isLogin);
    setAuthUser(user);
  }
    
    return(
        <Router>
            <div className='app'>
                <Switch>
                    <Route path='/checkout'>
                      <Header />
                      <Checkout />
                    </Route>
                    <Route path='/login'>
                    <Login handleLoginstate={handleLoginstate}/>
                    </Route>
                    <Route path='/signup'>
                    <SignUp/>
                    </Route>
                    {/* Default Route */}
                    <Route path='/'>
                        <Header />
                        <Home isLogin={isLogin} firstName={typeof authUser === "object" ?authUser.firstName:null} />
                        <Footer />
                    </Route>
                </Switch> 
                
            </div>
        </Router>
    );
}

export default App;