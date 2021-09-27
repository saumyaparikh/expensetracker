import React, { useState } from "react";
const ExpensesForm = (props) => {
  const [enteredTitle, settitle] = useState("");
  const titleChangeHandler = (event) => {
    settitle(event.target.value);
    //console.log(enteredTitle);
  };
  const [enteredAmount, setamount] = useState("");
  const amountChangeHandler = (event) => {
    setamount(event.target.value);
    //console.log(amount);
  };
  const [enteredDate, setdate] = useState("");
  const dateChangeHandler = (event) => {
    setdate(event.target.value);
    //console.log(date);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    //console.log(expenseData);
    props.onSaveExpenseData(expenseData);
    settitle("");
    setamount("");
    setdate("");
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="container mx-auto my-2">
          <div className="row align-items-center">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="titleid"
                  name="titlename"
                  placeholder="name@example.com"
                  value={enteredTitle}
                  onChange={titleChangeHandler}
                />
                <label htmlFor="floatingInput">Title</label>
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-4">
              <div className="form-floating">
                <input
                  type="number"
                  min="1"
                  step="1"
                  className="form-control"
                  id="amountid"
                  name="amountid"
                  placeholder="name@example.com"
                  value={enteredAmount}
                  onChange={amountChangeHandler}
                />
                <label htmlFor="floatingInput">Amount</label>
              </div>
            </div>
            <div className="col-5">
              <div className="form-floating">
                <input
                  type="date"
                  min="2021-01-01"
                  max="2023-01-01"
                  className="form-control"
                  id="dateid"
                  name="datename"
                  placeholder="id"
                  value={enteredDate}
                  onChange={dateChangeHandler}
                />
                <label htmlFor="floatingPassword">Date:</label>
              </div>
            </div>
            <div className="col-3">
              <button type="Submit" className="btn btn-info">
                Add Expense
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default ExpensesForm;
