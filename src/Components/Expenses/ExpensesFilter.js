import React from "react";
import "./ExpensesFilter.css";
const ExpensesFilter = (props) => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };
  return (
    <>
      <div className="d-flex justify-content-center ">
        <select
          defaultValue={props.selected}
          onChange={dropdownChangeHandler}
          className="form-select my-2 w-25 "
          aria-label="Default select example"
        >
          {/* <option value="DEFAULT">Filter by Year</option> */}
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
    </>
  );
};
export default ExpensesFilter;
