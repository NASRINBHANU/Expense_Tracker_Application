import React from "react";
import './ExpenseDate.css';
const ExpenseData=(props)=>
{
    const{date}=props;
    const year=date.getFullYear();
    const month=date.toLocaleDateString('en-US',{month:'long'});
    const day=date.toLocaleDateString('en-us',{day:'2-digit'});
    return (
        // <div className="date">
        //     <div>{month}</div>
        //         <div>{day}</div>
        //         <div>{year}</div>
        // </div>
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
            
        </div>
    )
}
export default ExpenseData;