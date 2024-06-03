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

    const handleNewTask = (newTaskName) => {

        var itemscopy = items.slice()
         itemscopy.push({
            title: newTaskName,
            done: false,
        });
         setItems(itemscopy)
        }

    console.log("TodoApp rendered")

    return <div className="widget-app">
        <h1 className="black">APPLICAZIONE TODO</h1>
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