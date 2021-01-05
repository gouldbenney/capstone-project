import React from 'react'
import CurrencyFormat from 'react-currency-format'
import '../Styles/Subtotal.css'
import { useStateValue } from '../Components/StateProvider'
import { getBasketTotal } from '../Components/reducer'


function Subtotal(){
    const [{basket}, dispatch] = useStateValue()
    return(
    <div className='subtotal'>
        {/* Price */}

        <CurrencyFormat
        renderText={(value) => (
            <>
            <p>
                Subtotal ({basket.length} items): <strong>{`${value}`}</strong>
            {/* <small className='subtotal__gift'>
            </small> */}
            </p>
            </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
        />
        <button>Proceed to Checkout</button>
    </div>
    )
}

export default Subtotal