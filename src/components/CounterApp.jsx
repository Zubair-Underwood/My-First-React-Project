import React, { useState } from 'react';
export const CounterApp = () => {

    const [count, setCount] = useState(0);
    const handleCounter = () => {

        // setCount(count + 1);

        set
    }

    const resetCount = () => {

        setCount(0);
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleCounter}>Increase Count</button>
            <button onClick={resetCount}>Reset Count</button>
        </>
    )
}
