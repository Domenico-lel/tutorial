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

  function isTaskDone(task){
    return task.done
  }

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

              <input checked={isTaskDone(task)} onChange={(e) => {

                console.log("checkbox del task id: " + task.id + " corrente: " + e.target.checked)

                handleCheckbox(task.id, e.target.checked)

              }} type="checkbox" /*checked={e.target.input}*/ />
              <h3 style={{
                textDecoration: isTaskDone(task) ? 'line-through' : 'none',
                color: task.color,
              }} className="black">{task.title}</h3>

              <div style={{ fontSize: 20 }}>
                {task.date ? (
                  <p>La data è: {task.date}</p>
                ) : (
                  <p>La data non è disponibile</p>
                )}
              </div>

            </div>

          )
        }
      )
    }
  </div>
}




export default TaskList;