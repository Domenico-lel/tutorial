import { useState } from "react";
import TaskList from "./TaskList";

function NewTaskbar(

  {
    onNewTask = ()=>{}
  }
) {

  const[taskName, setTaskName] = useState("")

  console.log("NewTaskBar rendered")

  const handleInput = (inputChecked) => {

    setTaskName(inputChecked)
  }


  return <div className="newtask-list">
    <h3 className="black">Add New Task</h3>

    <div className="flex">
      <input onChange={(e)=>{
        console.log("l'input e' stato cambiato in " + e.target.value)

        handleInput(e.target.value)
      }} type="text" placeholder="Inserisci testo qui..." className="gradient-input"></input>
      <button onClick={()=>{
        onNewTask(taskName)
      }}>+</button>
    </div>
  </div>
}




export default NewTaskbar; 