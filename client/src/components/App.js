import React from 'react';
import expenses from '../mockdata/expenses';
import Expenses from './Expenses/Expenses.component';

const App = () => (
    <Expenses expenses={expenses} />
);

export default App;