import React from 'react';
import ExpenseDate from '../ExpenseDate/ExpenseDate.component';
import PriceTag from './PriceTag/PriceTag.component';
import './ExpenseItem.styles.css';

const ExpenseItem = ({
    title, 
    date, 
    amount
}) => {
    return (
        <div className='expense-item'>
            <ExpenseDate date={date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <PriceTag amount={amount} />
            </div>
        </div>
    );
};

export default ExpenseItem;