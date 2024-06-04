
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses , currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        let value = parseInt(event.target.value);
        if (value > 20_000) {
            alert(`Budget value cannot exceed ${currency}20,000`);
            return;
        }
        else if (value < totalExpenses) {
            alert("You cannot reduce the budget value lower than the spending.");
            return;
        }
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}{budget}</span>
            <input type="number" step="10" max={20_000} value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;