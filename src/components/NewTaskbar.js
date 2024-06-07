import { useState } from "react";
import TaskList from "./TaskList";

function NewTaskbar(

  {
    onNewTask = () => { }
  }
) {

  const colors = [
    "blue",
    "red",
    "orange",
    "brown",
    "yellow"
  ];

  // utilizzo useState per memorizzare il nome del task
  // setTaskName e' una funzione che serve per modificare taskName
  const [taskName, setTaskName] = useState("")
  const [date, setDate] = useState("")
  // setColor imposta color in base al parametro  es: setColor("red") imposta red con il valore "red"
  const [color, setColor] = useState(colors[1])
  const [manualColor, setManualColor] = useState("")

  console.log("NewTaskBar rendered")
  // 2) handleInput prende in input il valore inserito dall'utente (inputString)
  // e lo utilizza per settare taskName (attraverso la funzione setTaskName)
  // la modifca di taskName cambiera' lo stato del componente 
  // il cambiamento dello stato del componente causera' il re-rendering del componente
  const handleName = (inputName) => {
    setTaskName(inputName)
  }

  const handleDate = (inputDate) => {
    setDate(inputDate)
  }

  const handleColor = (inputColor) => {
    setColor(inputColor)
    setManualColor(inputColor)
  }

  const handleManualcolor = (inputManualColor) => {
    setManualColor(inputManualColor)

    //se l'array colors contiene un elemento stringa = a insertColor allora setto color con il valore di inputManualColor 
    if (colors.includes(inputManualColor)) {
      setColor(inputManualColor)
    }

  }

  function isColorCorrect(){
    return color == manualColor;
  }

  console.log("il valore di inputValue e'   : " + date)


  return <div className="newtask-list">
    <h3 className="black">Add New Task</h3>

    <div className="flex_list">

      <input
        onChange={(e) => {
          // 1) funzione anonima legata all'evento onCange
          console.log("l'input e' stato cambiato in " + e.target.value)
          handleName(e.target.value)
        }}
        type="text"
        placeholder="Inserisci task qui"
        className="gradient-input">

      </input>

      <input
        onChange={(data) => {
          handleDate(data.target.value)
        }}
        placeholder="inserisci la data"
        className="gradient-input secondary"
        type="text"
        value={date}
      />

      <input
        onChange={(e) => {
          handleManualcolor(e.target.value)
        }}

        style={{color: isColorCorrect() ? 'green' : 'red'}}
        placeholder="inserisci il colore"
        className="gradient-input secondary"
        type="text"
        value={manualColor}
      />



      {/* selettore dei colori */}
      <select
        value={color}
        onChange={(color) => {
          handleColor(color.target.value)
        }} className="habugher">

        {
          colors.map(
            (color) => {
              return (
                <option
                  value={color}>
                  {color}
                </option>
              )
            }

          )
        }
      </select>


      <button
        onClick={() => {
          //funzione anonima legata all'evento onClick del pulsante 
          if (taskName != "") {
            // Se il campo taskName non è vuoto chiama la funzione onNewTask
            onNewTask(taskName, date, color)
          } else {
            // altrimenti stampa l'allert 
            alert("il campo e' vuoto")
          }
        }
        }>+</button>
    </div>
  </div>
}




export default NewTaskbar; 