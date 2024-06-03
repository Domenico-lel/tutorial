function TaskList(
  {
    items = []

  }
) {

  console.log("items rendered " + items.length)

  return <div className="task-list">



    {items.length === 0 &&
      <p>Nessun Task...</p>


    }

    {
      items.map(


        (task) => {
          return (
            <div key={task.id} className="flex">

              <input type="checkbox" /*checked={task.done}*/ />
              <h3 style={{
                textDecoration: task.done ? 'line-through' : 'none'
              }} className="black">{task.title}</h3>

            </div>

          )
        }
      )
    }
  </div>
}




export default TaskList;