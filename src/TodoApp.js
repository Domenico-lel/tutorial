import { useState } from "react";
import NewTaskbar from "./components/NewTaskbar";
import TaskList from "./components/TaskList";

function TodoApp() {

    // dati mokkati (mockup)
    const sample = [
        {
            id: "",
            title: "attivita' 1",
            done: true,
            date: "01/02/2003",
        }, {
            id: "",
            title: "attivita' 2",
            done: false,
            date: "01/02/2003",
        }
    ]

    const [items, setItems] = useState([])

    const [prova, setProva] = useState(0)

    const handleEditedTask = (taskId, checkedStatus) => {

        // mi faccio una copia di items che andro' a manipolare
        // (items e' in solo lettura, non posso modificarla se non con la funzione setItems)
        var itemscopy = items.slice()

        // cerco l'indice dell' elemento (task) che ha "id" uguale al taskId che mi interessa 
        const index = itemscopy.findIndex(item => item.id == taskId)

        console.log("il task che sta per cambiare ha indice: " + index)

        // assegno il valore di checkedStastus(true/false) alla proprieta' "done" dell'elemento posizionato
        // all' indice che ho appena trovato sopra 
        itemscopy[index].done = checkedStatus

        // infine aggiorno items 
        setItems(itemscopy)

    }

    const handleNewTask = (newTaskName, taskDate) => {

        var itemscopy = items.slice()
        // instanzio un nuovo oggetto con le proprieta' del nuovo task
        const newTask = {
            id: items.length + 1,
            title: newTaskName,
            done: false,
            date: taskDate,
        }
        itemscopy.push(newTask);
        setItems(itemscopy)
    }

    console.log("TodoApp rendered")

    console.log("items: " + JSON.stringify(items))


    if (items.length > 0) {
        console.log("il titolo del primo task e': " + items[0].title)

    }

    return <div className="widget-app">
        <h1 className="black">APPLICAZIONE TODO</h1>
        <button onClick={() => {
            setProva(prova + 1)
        }}>Force Refresh</button>
        {<TaskList
            items={items}
            onTaskChanged={
                (recivedTaskId, receivedStatus) => {
                    console.log("taskId e': " + recivedTaskId + ", checkedStatus e': " + receivedStatus)
                    handleEditedTask(recivedTaskId, receivedStatus)
                }

            }
        />}
        <NewTaskbar
            onNewTask={
                (taskName, taskDate) => {
                    console.log("ricevuto nuovo task da NewTaskbar")
                    handleNewTask(taskName, taskDate)
                }
            }
        />
    </div>
}


export default TodoApp;