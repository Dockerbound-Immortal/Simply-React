import React from 'react';
import ExpenseDate from './ExpenseDate/ExpenseDate.component';
import PriceTag from './PriceTag/PriceTag.component';
import Card from '../../Card/Card.component';
import './ExpenseItem.styles.css';

const ExpenseItem = ({
    title, 
    date, 
    amount
}) => (
    <Card classes={{
        ExpenseItem: 'expense-item'
    }}>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <PriceTag amount={amount} />
        </div>
    </Card>
);

export default ExpenseItem;