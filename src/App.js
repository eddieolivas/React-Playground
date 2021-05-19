import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
      <h2>Just getting started!</h2>
      <p>This is also a thing.</p>
      <ExpenseItem name="Groceries" />
      <ExpenseItem name="Gas"/>
      <ExpenseItem name="Classes" />
    </div>
  );
}

export default App;
