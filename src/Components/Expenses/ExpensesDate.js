import "./ExpensesDate.css";
const ExpensesDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const date = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <>
      <div className="day">
        {date} {month} {year}
      </div>
    </>
  );
};
export default ExpensesDate;
