import { useState } from "react";

function NewPersonForm(
    {
        onNewPerson = () => { }
    }
) {

    const [personName, setPersonName] = useState("")
    const [personSurame, setPersonSurname] = useState("")
    const [date, setDate] = useState("")


    const handleName = (inputName) => {
        setPersonName(inputName)
    }

    const handleSurname = (inputSurname) => {
        setPersonSurname(inputSurname)
    }

    const handleDate = (inputDate) => {
        setDate(inputDate)
    }

    return <div className=" newpersonform">
        <h1>NewPersonForm</h1>
        <div>
            <input
                onChange={(e) => {
                    handleName(e.target.value)
                }}
                placeholder="name"
                className="gradient-input"
                value={personName}
            />

            <input
                onChange={(surname) => {
                    handleSurname(surname.target.value)
                }}
                placeholder="surname"
                className="gradient-input"
                value={personSurame}
            />

            <input
                onChange={(date) => {
                    handleDate(date.target.value)
                }}
                placeholder="date of birth"
                className="gradient-input"
                value={date}
            />

        </div>
        <button
            onClick={() => {

                const newPerson = {
                    name: personName,
                    surname: personSurame,
                    date: date
                }

                onNewPerson(newPerson)
            }}
        >+</button>
    </div>

}

export default NewPersonForm;
