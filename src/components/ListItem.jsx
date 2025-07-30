const ListItem=(props)=>{
     const {title,amount,_id}=props.expenses;
     const type= amount>0?"income":"expense";
    const handleDelete=()=>{
         props.deleteExpense(_id);
    }
    const handleEdit=()=>{
        props.setItemToEdit(props.expenses)
    }
    return(
       
        <div className={`list-item ${type}`}>
                <div className="item-name">{title}</div>      
                <div className="edit-button-overlay"><button onClick={handleEdit}>Edit</button></div>           
                <div className="delete-button-overlay" ><button onClick={handleDelete}>Delete</button></div>
                <div className="item-amount">${amount}</div>
        </div>
    )
}

export default ListItem;