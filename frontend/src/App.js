import './App.css';
import Header from './Pages/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Login from './Pages/Login'
import Home from './Pages/Home'
import Checkout from './Pages/Checkout'
import Footer from './Components/Footer'

function App () {
    return(
        <Router>
            <div className='app'>
                <Switch>
                    <Route path='/checkout'>
                      <Header />
                      <Checkout />
                    </Route>
                    <Route path='/login'>
                        <h1>Login Page</h1>
                    <Login/>
                    </Route>
                    {/* Default Route */}
                    <Route path='/'>
                        <Header/>
                        <Home/>
                        <Footer/>
                    </Route>
                </Switch> 
                
            </div>
        </Router>
    );
}

export default App;