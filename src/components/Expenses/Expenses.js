import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import Card from '../UI/Card';
import "./Expenses.css";

const Expenses = (props) => {
  const [expenseFilter, setExpenseFilter] = useState('2020');

  const expenseFilterHandler = (event) => {
    setExpenseFilter(() => event.target.value);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={expenseFilter}
          changed={expenseFilterHandler} 
        />
        {props.expenses.map(expense => {
          return (
            <ExpenseItem 
              key={expense.title}
              title={expense.title}
              date={expense.date}
              amount={expense.amount}
            />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
