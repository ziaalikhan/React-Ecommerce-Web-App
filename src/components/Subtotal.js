import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';
import { useStateValue } from '../config/StateProvider';
import { getBasketTotal } from '../config/reducer';
import { useHistory } from 'react-router-dom';


function Subtotal() {

    const history = useHistory();

    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='subtotal'>
            <CurrencyFormat
            renderText={(value)=> (
                <>
                <p>
                    Subtotal ({basket.length} items) : <strong className='sub_price'>{value}</strong>
                </p>
                <small className='subtotal_gift'>
                    <input type="checkbox"/>
                    This order contains a gift
                </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparater={true}
            prefix={"$"}
            
            />

            <button onClick={e => history.push('/payment')} className='checkout_btn'>Proceed to Checkout</button>
         
          
            
        </div>
    )
}

export default Subtotal;
