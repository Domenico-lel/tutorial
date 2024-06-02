function NewTaskbar(
  {
    items = []

  }
) {

  return <div className="newtask-list">
    <h3>Add New Task</h3>

    <div className="flex">
      <input type="text" placeholder="Inserisci testo qui..." className="gradient-input"></input>
      <button>+</button>
    </div>
  </div>
}




export default NewTaskbar;