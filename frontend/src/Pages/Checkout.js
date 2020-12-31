import React from 'react';
import '../Styles/Checkout.css'
import Subtotal from '../Pages/Subtotal'
import { useStateValue } from '../Components/StateProvider'
import CheckoutProduct from '../Components/CheckoutProduct'

 function Checkout(){
    const [{ basket }] = useStateValue();
    return (
    <div className='checkout'>
        <div className='checkout__left'>
        <img 
            className='checkout__ad' 
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" 
            alt="" 
        />
        
        {basket?.length === 0 ? (
            <div>
                <h2 className='checkout__title'>Your Shopping Basket is empty</h2>
                <p>You have no items in your basket
                    Click "Add to basket" to add an item.
                </p>
            </div>
        ) : (
        <div>
            <h2 className='checkout__title'>Your Shopping Basket</h2>
        {/* All Checkout Products */}
        {basket.map (item => (
             <CheckoutProduct 
             id={item.id}
             title={item.title}
             image={item.image}
             price={item.price}
             rating={item.rating}
            />
            ))}
        </div>
        )}
        </div>
        {basket.length > 0 &&(
            <div className='checkout__right'>
                <Subtotal />
            </div>
        )}
    </div>
    );
}


export default Checkout