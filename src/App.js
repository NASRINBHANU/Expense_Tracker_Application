import './App.css';
//import ExpenseItem from './component/ExpenseItem';
//import ExpenseItem from './component/expenses/expense_item/ExpenseItem';
import Expenses from './component/expenses/Expenses';
import NewExpense from './component/new_expense/NewExpense';
import { useState } from 'react';
import Counter from './Counter';
const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New Mobile', amount: 799.49, date: new
Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  // const [expenses,setExpenses]=useState(DUMMY_DATA)
  // const onAddExpense=(newvalue)=>{
  //   setExpenses([...expenses,newvalue])
  //   //setExpenses((prev)=>[...prev,newValue])
  // }
  // const DUMMY_DATA = [
  //   {
  //     id: 'e1',
  //     title: 'Groceries',
  //     amount: 94.12,
  //     date: new Date(2021, 7, 14),
  //   },
  //   { id: 'e2', title: 'New Mobile', amount: 799.49, date: new
Date(2020, 2, 12) }
  //   {
  //     id: 'e3',
  //     title: 'Car Repair',
  //     amount: 294.67,
  //     date: new Date(2021, 2, 28),
  //   },
  //   {
  //     id: 'e4',
  //     title: 'New work desk',
  //     amount: 450,
  //     date: new Date(2021, 5, 12),
  //   },
  // ];
  return (
    <Counter></Counter>)
    // <div className="App">
    //   <NewExpense onAddExpense={onAddExpense}/>
    //   <Expenses expenses={expenses}/>
      {/* <form>
        <label for="title">TITLE</label>
        <input type="text" id="title" name="title"></input>
        <label for="amount">AMOUNT</label>
        <input type="text" id="amount" name="amount"></input>
        <label for="date">DATE</label>
        <input type="date" id="date" name="date"></input>
        <button>ADD EXPENSE</button>
        <button>CANCEL</button>
       </form> */}


          {/* <form>
            <label for="name">NAME:</label>
            <input type="text" name="name" id="name"></input>
            <div>
            <label for="pwd">PASSWORD:</label>
            <input type="password" name="pwd" id="pwd"></input>
            </div>
            <button>SUBMIT</button>
          </form> */}
          {/* EMPTY PROJECT */}
          {/* <ExpenseItem
          title={"expense request"}
          amount={100}
          date={new Date(2023, 9, 24)}
          /> */}
          {/* <ExpenseItem
          title={DUMMY_DATA[0].title}
          amount={DUMMY_DATA[0].amount}
          date={DUMMY_DATA[0].date}/>
          <ExpenseItem
          title={DUMMY_DATA[1].title}
          amount={DUMMY_DATA[1].amount}
          date={DUMMY_DATA[1].date}/>
          <ExpenseItem
          title={DUMMY_DATA[2].title}
          amount={DUMMY_DATA[2].amount}
          date={DUMMY_DATA[2].date}/>
          <ExpenseItem
          title={DUMMY_DATA[3].title}
          amount={DUMMY_DATA[3].amount}
          date={DUMMY_DATA[3].date}/> */}




    // </div>
  // );


export default App;