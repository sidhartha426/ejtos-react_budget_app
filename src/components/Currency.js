import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency,dispatch } = useContext(AppContext);
    const changeCurrency = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }
    return (
        <div class="alert alert-success" role="alert">
            <label className='currency-select-label'>Currency(

                <select className="currency-select" onChange={changeCurrency} defaultValue={currency} >

                    <option value="$" name="$">$ Dollar</option>
                    <option value="£" name="£">£ Pound</option>
                    <option value="€" name="€">€ Euro</option>
                    <option value="₹" name="₹">₹ Ruppee</option>

                </select>
                )
            </label>

        </div>


    );
}

export default Currency;