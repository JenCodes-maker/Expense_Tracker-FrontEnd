import History from './History';
import ExpenseForm from'./ExpenseForm';
import BalanceContainer from './BalanceContainer';
import { useState,useEffect } from 'react';


const ExpenseContainer=()=>{
    const [expenses,setExpenses]=useState([])
    const[itemToEdit,setItemToEdit]=useState(null)

     const fetchExpenses = async () => {
    
    try {
      const response = await fetch('http://localhost:3000/expense');
      const data = await response.json();
      setExpenses(data);
    } catch (error) {
      console.error('Failed to fetch expenses:', error);
    }
  
  };
  console.log(expenses);

  useEffect(() => {
    fetchExpenses();
  }, []);

  
  const addExpense = async (title, amount) => {
    try {
      const response = await fetch('http://localhost:3000/expense', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, amount }),
      });
      if (response.ok) {
        const newItem = await response.json();
        setExpenses((prev) => [...prev, newItem]);
      } else {
        console.error('Failed to add expense');
      }
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };
  

    // console.log(itemToEdit)
    // const addExpense=(title,amount)=>{
    //     setExpenses([...expenses, { id: uuidv4(), title: title, amount: amount }])
    // }

    // const deleteExpense=(id)=>{
    //     setExpenses(expenses.filter((item)=> item._id !== id))
    // }
   const deleteExpense = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/expense/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        await fetchExpenses(); // Refresh after delete
      } else {
        console.error('Failed to delete expense');
      }
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

    // const editExpense=(id,title,amount)=>{
    //     //console.log(id)
    //     setExpenses(expenses.map((exp)=>{if(exp.id===id){
    //         return {id,title,amount}
    //     }else{
    //         return exp
    //     }
    // }))
    // setItemToEdit(null)
    // }
    const editExpense = async(id,title,amount) => {
        try {
        const response = await fetch(`http://localhost:3000/expense/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, amount }),
        });
        if (response.ok) {
            const updatedItem = await response.json();
            setExpenses(expenses.map((exp) => (exp._id === id ? updatedItem : exp)));
        } else {
            console.log("Failed to update expense");
        }
    } catch (error) {
        console.error('Failed to edit expense', error);
    }
    // setItemToEdit(null);
    }



    //console.log('expenses', expenses)
    return(
        
        <div className="expense-container">
        <h1>   Expense Tracker    </h1>
        <BalanceContainer expenses={expenses}/>
        <ExpenseForm addExpense={addExpense} itemToEdit={itemToEdit} editExpense={editExpense} setItemToEdit ={setItemToEdit} />
        <History expenses={expenses} deleteExpense={deleteExpense} editExpense={editExpense} setItemToEdit={setItemToEdit}/>
        </div>
    )
    
}
export default ExpenseContainer;