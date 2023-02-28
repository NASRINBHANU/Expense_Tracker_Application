import React from "react";
import ExpenseItem from "./expense_item/ExpenseItem";
import './Expenses.css';
const Expenses =(props)=>{
    const expenses=props.expenses;
     return (
     <div className="expenses">
         {expenses.map((exp,index)=>(<ExpenseItem
         key={exp.id}
         title={exp.title}
         amount={exp.amount}
         date={exp.date}/>))
         }
         </div>
         )
}
export default Expenses;
