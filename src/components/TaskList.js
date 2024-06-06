function TaskList(
  {
    items = [],
    onTaskChanged = () => { }
  }
) {


  console.log("NewTaskBar rendered")


  const handleCheckbox = (taskId, doneStatus) => {

    console.log("taskId: " + taskId + ", doneStatus: " + doneStatus)

    if (taskId != null && doneStatus != null) {
      onTaskChanged(taskId, doneStatus)

    } else {
      alert("si e' verificato un errore")
    }


  }

  console.log("items rendered " + items.length)

  return <div className="task-list">



    {items.length === 0 &&
      <p>Nessun Task...</p>


    }

    {
      items.map(

        // esegue le instruzioni nella return per OGNI task contenuto nell'array items
        (task) => {
          return (
            <div key={task.id} className="flex">

              <input onChange={(e) => {

                console.log("checkbox del task id: " + task.id + " corrente: " + e.target.checked)

                handleCheckbox(task.id, e.target.checked)

              }} type="checkbox" /*checked={e.target.input}*/ />
              <h3 style={{
                textDecoration: task.done ? 'line-through' : 'none',
                color: 'red'
              }} className="black">{task.title}</h3>

              <p>
                la data e':  
                {task.date}
              </p>

            </div>

          )
        }
      )
    }
  </div>
}




export default TaskList;