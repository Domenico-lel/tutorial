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
            done: false,
        }, {
            title: "attivita' 4",
            done: false,
        }, {
            title: "attivita' 5",
            done: false,
        },
    ]

    return <div className="widget-app">
        <h1 className="black">APPLICAZIONE TODO</h1>
        <TaskList items={
            fakeItems
        } />
        <NewTaskbar/>
    </div>
}


export default TodoApp;