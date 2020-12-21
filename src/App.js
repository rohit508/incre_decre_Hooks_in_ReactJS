import React, { useState } from "react";







const App = () => {

    const state = useState();
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count + 1 );
    }

    const Decrement = () => {
        setCount(count -1 );
    }
    return (
        <>
            <h1 className="num">{count}</h1>
            <button className="btn" onClick ={Decrement}>Decrement</button>
            <button className="btn" onClick={increment}>Increment </button></>
    )

}


export default App;