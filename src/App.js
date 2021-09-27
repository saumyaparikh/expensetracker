import React, { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import NewExpenses from "./Components/AddExpenses/NewExpenses";
import Expenses from "./Components/Expenses/Expenses";
const DummyItems = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: "2500",
    date: new Date(2021, 4, 12),
  },
  {
    id: "e2",
    title: "Rent",
    amount: "5000",
    date: new Date(2021, 11, 12),
  },
  // {
  //   id: "e1",
  //   title: "Car Insurance",
  //   amount: "9456",
  //   date: new Date(2022, 4, 12),
  // },
];
const App = () => {
  const [expense, setExpenses] = useState(DummyItems);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
    // console.log("In App");
    // console.log(expense);
  };
  return (
    <div>
      <Navbar />
      <NewExpenses onAddExpenses={addExpenseHandler} />
      <Expenses item={expense} />
    </div>
  );
};
export default App;
