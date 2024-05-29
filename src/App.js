import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Menu from './components/Menu';
import Counter from './components/Counter';
import { useState } from 'react';

function App() {

  console.log("app rendered")
  // main function
  function showAlert() {
    alert("I am an alert box!")
  }

  function print(){
    console.log(arguments)
  }

  print("hello", 400, false)


  const [conto, setConto] = useState(1)

  function countIncrement(){
      setConto(conto + 1)
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Eciao a tuttiii
        </p>
        <MyButton
          label={'show-button'}
          callback={() => {
            showAlert("msg")
          }}/>
        
        <Menu items={
          [
            "voce-1",
            "voce-2",
          ]
        } />

        <Counter onClick={countIncrement} counter={conto}/>
        <Counter onClick={countIncrement} counter={conto}/>
      </header>
    </div>
  );
}

export default App;
