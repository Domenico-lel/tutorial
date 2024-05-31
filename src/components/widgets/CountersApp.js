import { useState } from "react";
import Counter from "../Counter";
import LocalCounter from "../LocalCounter";
import Menu from "../Menu";
import MyButton from "../MyButton";

function CountersApp() {


  const [conto, setConto] = useState(1)

  function showAlert() {
    alert("I am an alert box!")
  }

  function countIncrement() {
    setConto(conto + 1)
  }


  return (
    <div className="widget-app">
    <h1>Counters App</h1>
      <MyButton
        label={'show-button'}
        callback={() => {
          showAlert("msg")
        }} />

      <Menu items={
        [
          "voce-1",
          "voce-2",
        ]
      } />

      <Counter onClick={countIncrement} counter={conto} />
      <br />
      <Counter onClick={countIncrement} counter={conto + 1} />


      <LocalCounter />
    </div>

  );
}

export default CountersApp;
