import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { currency } = useContext(AppContext);
    const changeCurrency = (event) => {
        console.log(event.target.value);
    }
    return (
        <div class="alert alert-success" role="alert">
            <select className="form-select form-select-sm mx-lg-2  w-75" id="inputGroupSelect02" onChange={changeCurrency}>
                <option value="$" name="$">$ Dollar</option>
                <option value="£" name="£">£ Pound</option>
                <option value="€" name="€">€ Euro</option>
                <option value="₹" name="₹">₹ Ruppee</option>
            </select>
        </div>


    );
}

export default Currency;