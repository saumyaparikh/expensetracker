import React from "react";
import ExpensesDate from "./ExpensesDate";
const ExpensesItem = (props) => {
  return (
    <>
      <div className="card text-white bg-dark mb-3 mx-5">
        <div className="card-body">
          <h5 className="card-title cardinfo">
            <div className="container">
              <div className="row ">
                <div className="col-auto m-auto text-break">
                  <span className="m-2 p-3 bg-white text-black bg-gradient d-inline-block">
                    <div className="title">{props.title}</div>
                  </span>
                </div>

                <div className="col-auto m-auto text-break">
                  <span className="m-2 p-3 bg-white text-black bg-gradient d-inline-block">
                    <ExpensesDate date={props.date} />
                  </span>
                </div>
                <div className="col-auto m-auto text-break">
                  <span className="m-2 p-3 bg-white text-black bg-gradient d-inline-block">
                    <div className="amount">{props.amount}</div>
                  </span>
                </div>
              </div>
            </div>
          </h5>
        </div>
      </div>
    </>
  );
};
export default ExpensesItem;
