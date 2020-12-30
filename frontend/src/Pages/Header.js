import React from 'react';
import SearchIcon from '@material-ui/icons/Search'
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket'
import '../Styles/Header.css'
import {Link} from 'react-router-dom'
import { useStateValue } from '../Components/StateProvider'


function Header() {
    const [{basket}, dispatch] = useStateValue();
    console.log('my basket', basket)
    return(
        <nav className='header'>
        <Link to='login'>
            <img className='header__logo' alt='logo' src="/images/img2.jpeg" />
        </Link>
            <div className='header__search'>
                <input type='text' className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>
            <div className='header__nav'>

            {/* 1st Link */}
            <Link to='/login' className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Hello User </span>
                    <span className='header__optionLineTwo'>Sign In or Sign Out </span>
                </div>
            </Link>

            {/* 2nd Link */}
            <Link to='/' className='header__link'>
                <div className='header__option'>
                    <span className='header__optionLineOne'>Returns </span>
                    <span className='header__optionLineTwo'>& Orders </span>
                </div>
            </Link> 
            </div>

            {/* Basket Icon with Number */}

            <Link to='/checkout' className='header__link'>
                <div className='header__optionBasket'>
                    <ShoppingBasketIcon/>

            {/* Number of Items In the Basket */}
                    <span className='header__productCount'>{basket?.length}</span>
                </div>
            </Link>
        </nav>
    )
}

export default Header;