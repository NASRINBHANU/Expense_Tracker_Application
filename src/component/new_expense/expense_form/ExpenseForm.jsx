import React, { useState } from "react";
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    const [EnteredTitle,setEnteredTitle]=useState('');
    const [EnteredAmount,setEnteredAmount]=useState(0);
    const [EnteredDate,setEnteredDate]=useState('');
    const onTitleChange=(event)=>{
        console.log(event.target.value);
        setEnteredTitle(event.target.value);
    }
    const onAmountChange=(event)=>{
        console.log(event.target.value);
        setEnteredAmount(event.target.value);
    }
    const onDateChange=(event)=>{
        console.log(event.target.value);
        setEnteredDate(event.target.value);
    }
    const onExpenseSubmit=(event)=>{
        event.preventDefault();
        console.log('call from form',EnteredTitle,EnteredAmount,EnteredDate);
        const new_expense={
            title:EnteredTitle,
            amount:EnteredAmount,
            date:new Date(EnteredDate),
        }
        props.onSave(new_expense);
    };
    return (
        <form onSubmit={onExpenseSubmit}>
                
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" value={EnteredTitle} onChange={onTitleChange}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" id="amount" value={EnteredAmount} onChange={onAmountChange}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" name="date" id="date" value={EnteredDate} onChange={onDateChange}/>
            </div>
            
        </div>
        <div className="new-expense__actions">
            <button>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
        
    </form>
    )
}
export default ExpenseForm;