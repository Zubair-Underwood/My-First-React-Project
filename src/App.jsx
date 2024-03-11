import { CounterApp } from "./components/CounterApp.jsx";
import { GenerateRandomNumber } from "./components/GenerateRandomNumber.jsx";
import { LearnComponent } from "./components/LearnComponent.jsx"
import { LearnEvent } from "./components/LearnEvent.jsx";
import { LearnJSX } from "./components/LearnJSX.jsx"
import { LearnProps } from "./components/LearnProps.jsx"
import { LearnState } from "./components/LearnState.jsx";
import { LearnUseCallBack } from "./components/LearnUseCallBack.jsx";
import { LearnUseEffect } from "./components/LearnUseEffect.jsx";
import { LearnUseMemo } from "./components/LearnUseMemo.jsx";
import { LiftingStateUp } from "./components/LiftingStateUp.jsx";


function App() {

  let roll = 101;
  const getData = (data) => {

    console.log(data);
  }

  return (
    <>
      {/* <LearnComponent /> */}
      {/* <LearnJSX/> */}
      {/* <LearnProps name="Zubi" roll={roll}/> */}
      {/* <LearnEvent/> */}
      {/* <LiftingStateUp myClick={getData}/> */}
      {/* <LearnState/> */}
      {/* <CounterApp /> */}
      {/* <LearnUseEffect/> */}
      {/* <LearnUseMemo /> */}
      <LearnUseCallBack/>
      
    </>
  )
}

export default App
