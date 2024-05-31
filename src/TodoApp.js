import TaskList from "./components/TaskList";

function TodoApp() {

    const fakeItems = [
        {
            title : "attivita' 1",
            done : true,
        },
        {
            title : "attivita' 2",
            done : false,
        }
    ]

    return <div className="widget-app">
        <h1>Todo App</h1>  
        <TaskList items={
            fakeItems
        }/>  
    </div>
}


export default TodoApp;