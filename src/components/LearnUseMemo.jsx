import {useState, useMemo} from 'react'
import React from 'react'

export const LearnUseMemo = () => {
    const [count, setCount] = useState(0);
    const handleIncreaseCount = () => {

        console.log("Increase Count Function");
        setCount(count + 1);
    }

    const [randomNumber, setRandomNumber] = useState(null);
    const generateRandomNumber = () => {

        console.log("Generate Random Number Function");
        const newRandomNumber = Math.floor(Math.random() * 100) + 1;

        setRandomNumber(newRandomNumber);
    };


    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleIncreaseCount}>Increase Count</button>
            <hr />
            <h2>Random Number: {randomNumber}</h2>
            <button onClick={generateRandomNumber}>Generate Random Number</button>
        </>
    )
}
