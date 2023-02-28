import React,{ useState } from "react"
import './ExpenseItem.css';
import ExpenseDate from "../expense_date/ExpenseDate";

const ExpenseItem =(props)=>{
    // let {
    //     //date=new Date(),
    //     //title='',
    //     //amount=0,
    //  }=props;  
    const [title,setTitle]=useState(props.title)
    const [amount,setAmount]=useState(props.amount)
    const [date,setDate]=useState(props.date)            //suppose indha line kudukalaena,line 11,14 props.date,props.amount
    // const date=new Date(2023,2,3).toISOString();
    // const title ="New TV";
    // const amount ='86';
    // console.log(props);
    // const year=date.getFullYear();
    // const month=date.toLocaleDateString('en-US',{month:'long'});
    // const day=date.toLocaleDateString('en-US',{day:'2-digit'});
    // function onChangeClick(event){
    //          console.log('ExpenseItemExpenseItem')  ;
    //          setTitle('updated'); 
    //          setAmount(82);
    //          setDate(new Date());
    //          console.log(title); 
    // }
    return(
        <div className="expense-item">
            <ExpenseDate date={date}/>
             {/* <div className="date">
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div> */} 
            {/* <div className="date">{date.toISOString()}</div> */}
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
            {/* <button onClick={onChangeClick}>CHANGE</button> */}
        </div>
    )
}
export default ExpenseItem;
