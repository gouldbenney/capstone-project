import React, { useEffect } from 'react';
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
    const [{user}, dispatch] = useStateValue();
    useEffect(() => {
        // const unsubscribe = auth (authUser) => {
        // if (authUser) {
        // the user is logged in

        // dispach({
        //  type: "SET_USER",
        //  user: authUser
        // })
        // } else {

        // the user is logged out
        // dispatch({
            // type: "SET_USER",
        //       user: null
        // })
        // }
        // }

        return() => {
            // unsubscribe();
        }
    }, []);
    
    return(
        <Router>
            <div className='app'>
                <Switch>
                    <Route path='/checkout'>
                      <Header />
                      <Checkout />
                    </Route>
                    <Route path='/login'>
                    <Login/>
                    </Route>
                    <Route path='/signup'>
                    <SignUp/>
                    </Route>
                    {/* Default Route */}
                    <Route path='/'>
                        <Header />
                        <Home />
                        <Footer />
                    </Route>
                </Switch> 
                
            </div>
        </Router>
    );
}

export default App;