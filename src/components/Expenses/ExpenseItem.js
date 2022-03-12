// import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  // const [title, setTitle] = useState(props.title);

  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // };
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.title}</h2>
        </div>
        <div className="expense-item__price"> ${props.amount}</div>

        {/* <button onClick={clickHandler}>Change Title</button> */}
      </Card>
    </li>
  );
};

//We pass props.date as date to be used s prop in ExpenseDate.

//Date() constructor returns an object, we cannot output an object directly so we use toISOString() function to output it as a string.

// toLocaleString converts the date into a readable format.

// We just point at the clickHandler and not execute it[clickHandler()] because if we write clickHandler() the fucntion will be executed as soon as it gets parsed and not when the button gets pressed.

export default ExpenseItem;
