function TaskTable(
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

    <table style={{ width: "100%" }}>
      <tr>
        <td>Status</td>
        <td>Task</td>
        <td>Date</td>
      </tr>


      {

        items.map(

          // esegue le instruzioni nella return per OGNI task contenuto nell'array items
          (task) => {
            return (


              <tr key={task.id}>
                <td><input onChange={(e) => {

                  console.log("checkbox del task id: " + task.id + " corrente: " + e.target.checked)

                  handleCheckbox(task.id, e.target.checked)

                }} type="checkbox" /*checked={e.target.input}*/ /></td>
                <td><h3 style={{
                  textDecoration: task.done ? 'line-through' : 'none',
                  color: task.color,
                }} className="black">{task.title}</h3></td>
                <td><div style={{ fontSize: 20 }}>
                  {task.date ? (
                    <p>La data è: {task.date}</p>
                  ) : (
                    <p>La data non è disponibile</p>
                  )}
                </div>
                </td>

              </tr>


            )
          }
        )
      }

    </table>
  </div>
}




export default TaskTable;