import React from 'react'
import ExpenseItem from '../Expenses/ExpenseItem/ExpenseItem.component';
import './Card.style.css'

const Card = ({
    children,
    classes,
}) => (
    <div className={classes.ExpenseItem}>{children}</div>
)

export default Card; 