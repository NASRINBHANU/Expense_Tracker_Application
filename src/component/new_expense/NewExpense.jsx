import React from "react";
import ExpenseForm from "./expense_form/ExpenseForm";
import './NewExpense.css';


const NewExpense=(props)=>{
    const onSave=(value)=>{
        const expense_data={
            ...value,
            id:Math.random().toString()
        }
        props.onAddExpense(expense_data);
        console.log('rgerg',value);
    }
    return (<div className="new-expense">
        <ExpenseForm
        onSave={onSave}/>
        {/* <form>
            <div>
                <div>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title"/>
                </div>
                <div>
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="amount" id="amount"/>
                </div>
                <div>
                    <label htmlFor="date">Date</label>
                    <input type="date" name="date" id="date"/>
                </div>
                
            </div>
            <div>
                <button>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form> */}
    </div>
    )
};


export default  NewExpense;