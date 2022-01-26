import React from 'react'
import './Card.style.css'

const Card = ({
    children,
    classes,
}) => (
    <div className={`card ${classes}`}>
        {children}
    </div>
);

export default Card; 