import {useState,useEffect} from 'react';
const Counter=()=>{
    const [count1,setCount1]=useState(0);
    const [count2,setCount2]=useState(0);
    useEffect(()=>{
        console.log("UseEffect")
    },[count1])
    console.log("rendering")
    const handleCount1=()=>{
        setCount1(count1+1);
    }
    const handleCount2=()=>{
        setCount2(count2+1);
    }
    return(
        <div>
            <h2>Counter</h2>
            <h4>Count1:{count1}</h4>
            <h4>Count2:{count2}</h4>
            <button onClick={handleCount1}>Increment1</button>
            <button onClick={handleCount2}>Increment2</button>   
            </div>
    )
}
export default Counter;