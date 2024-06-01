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
            <div className="task-list-flex">

              <input type="checkbox" checked={task.done} />
              <h3 className="black">{task.title}</h3>

            </div>

          )
        }
      )
    }
  </div>
}




export default TaskList;