import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import Menu from './components/Menu';
import Counter from './components/Counter';

function App() {
  function showAlert() {
    alert("I am an alert box!")
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

        <Counter/>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
