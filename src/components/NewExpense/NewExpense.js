import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    
    props.onAddExpense(expenseData);
  };

  const [showExpenseForm, setShowExpenseForm] = useState(false);

  const showExpenseFormHandler = () => {
    setShowExpenseForm(prevShow => !prevShow)
  };

  const expenseForm = showExpenseForm ? <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} show={showExpenseFormHandler} />
    : <button onClick={showExpenseFormHandler}>Add New Expense</button>;

  return (
    <div className="new-expense">
      {expenseForm}
    </div>
  );
}

export default NewExpense;