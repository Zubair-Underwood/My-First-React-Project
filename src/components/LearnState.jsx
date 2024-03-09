import { useState } from "react"

export const LearnState = () => {

    const [num, setNum] = useState(0)
    console.log("Number:", num);
    
    const handleNum = () => {

        setNum(9)
    }

  return (
    <>
    <h1>Number {num} </h1>
    <button onClick={handleNum}>Change Number</button>
    </>
  )
}
