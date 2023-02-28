import React, {useState} from "react";

const Counter = () => {
    const [number, setNumber] = usestate(0);
    const [text, setText] =  usestate('Hello')

    useEffect(() => {
        console.log('Call from global console');
        setText(Math.random());
    },[number]);

    console.log('Call global console');
    return(<div>
        <div>(number)</div>
        <div>NEW APP</div>
        <div>{text}</div>
        <button unclick = {()=> setNumber(Math.random())} > Update Number </button>
        <button unclick = {()=> setText(Math.random())} > Update Text </button>
    </div>)
}

export default Counter;