function TaskList(
  {
    items = []

  }
) {

  return <div className="task-list">
    {
      items.map(


        (task) => {
          return (
            <div>
              
              <h3>{task.title}</h3>
              <input type="checkbox" checked={task.done}/>

            </div>

          )
        }
      )
    }
  </div>
}




export default TaskList;