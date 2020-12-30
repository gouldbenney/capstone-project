import React from 'react';
import { useStateValue } from '../Components/StateProvider';
import '../Styles/Product.css'

function Product({id, title, image,  price, rating}){
    const [{basket}, dispatch] = useStateValue()

    console.log('basket content', basket)
    const addToBasket = () => {
      dispatch({
        type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
        },
    })
    }
    return(
    <div className='product'>
        <button onClick={addToBasket}>Add to Shopping Basket</button>
        
        <div className='product__info'>
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {
                    Array(rating)
                    .fill()
                    .map((_) => (
                        <p>*</p>
                    ))
                }

            </div>
        </div>
        <img src={image} alt=''/>
        
    </div>
    )
}

export default Product;