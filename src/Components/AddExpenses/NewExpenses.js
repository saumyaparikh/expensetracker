import ExpensesForm from "./ExpensesForm";
const NewExpenses = (props) => {
  const saveExpensesDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenses(expenseData);
  };
  return (
    <>
      <ExpensesForm onSaveExpenseData={saveExpensesDataHandler} />
    </>
  );
};
export default NewExpenses;
