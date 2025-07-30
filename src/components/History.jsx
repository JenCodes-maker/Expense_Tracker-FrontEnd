import ListItem from './ListItem';
const History=(props)=>{
    const {expenses}=props
    return (
        <div className="history"> 
        <h3>History</h3>
        {expenses.map((exp)=>(<ListItem key={exp._id} 
        expenses={exp} 
        isEditing={props.itemToEdit===exp._id}
        deleteExpense={props.deleteExpense}
        setItemToEdit={props.setItemToEdit}
        />))}
        </div>
    )
}
export default History;