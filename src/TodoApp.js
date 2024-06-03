import { useState } from "react";
import NewTaskbar from "./components/NewTaskbar";
import TaskList from "./components/TaskList";

function TodoApp() {

    const fakeItems = [
        {
            title: "attivita' 1",
            done: true, 
        }, {
            title: "attivita' 2",
            done: false,
        }, {
            title: "attivita' 3",
            done: true,
        }, {
            title: "attivita' 4",
            done: false,
        }, {
            title: "attivita' 5",
            done: false,
        },
    ]

    const [items, setItems] = useState([])

    const [prova, setProva] = useState(0)

    const handleNewTask = (newTaskName) => {

        var itemscopy = items.slice()

        

        // instanzio un nuovo oggetto con il titolo corrispondente al newTaskName
        const newObject = {
            id: items.length,
            title: newTaskName,
            done: false,
        }
         itemscopy.push(newObject);
         setItems(itemscopy)
        }

    console.log("TodoApp rendered")

    console.log("items: " + JSON.stringify(items))

    return <div className="widget-app">
        <h1 className="black">APPLICAZIONE TODO</h1>
        <button onClick={() => {
            setProva(prova + 1)
        }}>Force Refresh</button>
        <TaskList items={
            items
        } />
        <NewTaskbar
            onNewTask={
                (taskName)=>{
                    console.log(taskName)
                    handleNewTask(taskName)
                }
            }        
        />
    </div>
}


export default TodoApp;