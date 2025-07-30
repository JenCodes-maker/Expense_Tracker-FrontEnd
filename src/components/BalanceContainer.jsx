import CurrencyContainer from "./CurrencyContainer";
const BalanceContainer=(props)=>{
    const{expenses}=props;
    const incomeArr=expenses.filter((exp)=>exp.amount>0)
    const expenseArr=expenses.filter((exp)=>exp.amount<0)
    let income=0
    let ex=0
    incomeArr.forEach((e)=>{
    income+=parseInt(e.amount);
    })
    expenseArr.forEach((e)=>{
        ex+=parseInt(e.amount);
    })
    console.log(income,ex)
    return(
        <div className="balance-container">
           <CurrencyContainer title="Income" amount={income} type="income"/>
            <CurrencyContainer title="Expenses" amount={ex} type="ex"/>
            <CurrencyContainer title="Balance" amount={income+ex} />
            
        </div>
    )
}
export default BalanceContainer;