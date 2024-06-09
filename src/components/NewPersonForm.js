function NewPersonForm() {
  return (
    <div className=" newpersonform">
      <h1>NewPersonForm</h1>
      <div>
        <input placeholder="name" className="gradient-input"></input>
        <input placeholder="surname" className="gradient-input"></input>
        <input placeholder="date of birth" className="gradient-input"></input>
      </div>
      <button>SEND</button>
    </div>
  );
}

export default NewPersonForm;
