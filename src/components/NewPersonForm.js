import { useState } from "react";

function NewPersonForm(
    {
        onNewPerson = () => { }
    }
) {

    const [personName, setPersonName] = useState("")
    const [personSurame, setPersonSurname] = useState("")
    const [date, setDate] = useState("")
    const [gender, setGender] = useState("")

    const handleName = (inputName) => {
        setPersonName(inputName)
    }

    const handleSurname = (inputSurname) => {
        setPersonSurname(inputSurname)
    }

    const handleDate = (inputDate) => {
        setDate(inputDate)
    }

    const clearForm = () => {
        setPersonName("")
        setPersonSurname("")
        setDate("")
    }

    const handleGender = (inputGender) => {
        setGender(inputGender)

    }

    const isFormValid = () => {
        return personName != "" && personSurame != "" && date != ""
    }
    console.log("gender e':" +  gender)
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
                onChange={(e) => {
                    handleSurname(e.target.value)
                }}
                placeholder="surname"
                className="gradient-input"
                value={personSurame}
            />

            <input
                onChange={(e) => {
                    handleDate(e.target.value)
                }}
                placeholder="date of birth"
                className="gradient-input"
                value={date}
            />

            <select
                value={gender}
                onChange={(e) => {
                    handleGender(e.target.value)
                }} className="habugher">
                    <option value="F">Femmina</option>
                    <option value="M">Maschio</option>
                    
            </select>

        </div>
        <button
            onClick={() => {
                const condizione = isFormValid()

                if (isFormValid()) {
                    const newPerson = {
                        name: personName,
                        surname: personSurame,
                        date: date
                    }
                    onNewPerson(newPerson)
                    clearForm()
                } else {
                    alert("alcuni campi non sono stati inseriti")
                }


            }}
        >+</button>
    </div>

}

export default NewPersonForm;
