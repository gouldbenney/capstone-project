import React from 'react'
import '../Styles/CheckoutProduct.css'

function CheckoutProduct({ id, title, image, price, rating}) {
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt=""/>

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'></p>

                <p className='checkoutProduct__price'></p>
                <small>$</small>
                <strong>{price}</strong>

                <div className='checkoutProduct__rating'>
                {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>*</p>
                    ))}
            </div>
            <button>Remove from basket</button>
         </div>
        </div>
    )
}

export default CheckoutProduct
