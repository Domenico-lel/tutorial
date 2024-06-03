import { useState } from "react";
import TaskList from "./TaskList";

function NewTaskbar(

  {
    onNewTask = () => { }
  }
) {

  // utilizzo useState per memorizzare il nome del task
  // setTaskName e' una funzione che serve per modificare taskName
  const [taskName, setTaskName] = useState("")

  console.log("NewTaskBar rendered")
  // 2) handleInput prende in input il valore inserito dall'utente (inputString)
  // e lo utilizza per settare taskName (attraverso la funzione setTaskName)
  // la modifca di taskName cambiera' lo stato del componente 
  // il cambiamento dello stato del componente causera' il re-rendering del componente
  const handleInput = (inputString) => {

    setTaskName(inputString)
  }


  return <div className="newtask-list">
    <h3 className="black">Add New Task</h3>

    <div className="flex">
      <input onChange={(e) => {
        // 1) funzione anonima legata legata all'evento onCange
        console.log("l'input e' stato cambiato in " + e.target.value)
        handleInput(e.target.value)
      }
      } type="text" placeholder="Inserisci testo qui..." className="gradient-input"></input>

      <button 
      onClick={() => {
        //funzione anonima legata all'evento onClick del pulsante 
        if(taskName != "") {
          // Se il campo taskName non è vuoto chiama la funzione onNewTask
           onNewTask(taskName)
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