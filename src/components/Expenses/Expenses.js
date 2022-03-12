import "./Expenses.css";

import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const yearChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // converting every expense in expenses array into an ExpenseItem JSX element.
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onYearChange={yearChangeHandler}
          chosenYear={filteredYear}
        />

        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
