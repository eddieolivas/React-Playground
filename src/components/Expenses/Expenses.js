import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from '../ExpensesFilter/ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import "./Expenses.css";

const Expenses = (props) => {
  const [expenseFilter, setExpenseFilter] = useState('2021');

  const expenseFilterHandler = (event) => {
    setExpenseFilter(() => event.target.value);
    console.log(expenseFilter);
  }

  const filteredExpenses = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === expenseFilter
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter 
          selected={expenseFilter}
          changed={expenseFilterHandler} 
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList expenses={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
