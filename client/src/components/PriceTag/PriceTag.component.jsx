import React from "react";
import currencyMapping from "../../constants/currencyMapping";
import './PriceTag.styles.css';

const PriceTag = ({
    currency = 'GBP',
    amount, 
}) => ( 
    <div className="expense-item__price">
        {currencyMapping[currency]}{amount}
    </div>
);

export default PriceTag;