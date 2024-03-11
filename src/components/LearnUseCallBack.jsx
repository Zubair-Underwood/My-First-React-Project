import { useState, useCallBack } from "react";
import { GenerateRandomNumber } from "./GenerateRandomNumber";

import React, { useState } from 'react';
export const LearnUseCallBack = () => {
    const [count, setCount] = useState(0);

    const handleIncreaseCount = () => {
        setCount((prevCount) => prevCount + 1); // Fix typo here
    };

    const [randomNumber, setRandomNumber] = useState(0);

    // const generateRandomNumber = () => {
    //     const newRandomNumber = Math.floor(Math.random() * 100) + 1;
    //     setRandomNumber(newRandomNumber);
    // };

    const generateRandomNumber = useCallBack(() => {
        const newRandomNumber = Math.floor(Math.random() * 100) + 1;
        setRandomNumber(newRandomNumber);
    }, [randomNumber]);

    return (
        <>
            <GenerateRandomNumber
                randomNumber={randomNumber}
                generateRandomNumber={generateRandomNumber}
            />
            <h1>Count: {count}</h1>
            <button onClick={handleIncreaseCount}>Increase Count</button>
        </>
    );
};