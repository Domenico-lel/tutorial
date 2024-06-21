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
    const [userName, setUserName] = useState("")
    const [location, setLocation] = useState("")

    // Funzioni per gestire il cambiamento degli input
    const handleName = (inputName) => {
        setPersonName(inputName)
    }

    const handleSurname = (inputSurname) => {
        setPersonSurname(inputSurname)
    }

    const handleDate = (inputDate) => {
        setDate(inputDate)
    }

    // Funzione per pulire gli input del form
    const clearForm = () => {
        setPersonName("")
        setPersonSurname("")
        setDate("")
        setGender("Default")
        setUserName("")
        setLocation("")
    }

    const handleGender = (inputGender) => {
        setGender(inputGender)

    }

    const handleUserName = (inputUserName) => {
        setUserName(inputUserName)
    }

    const handleLocation = (inputLocation) => {
        setLocation(inputLocation)
    }

    // Funzione per verificare se il form è valido
    const isFormValid = () => {
        return personName != "" && personSurame != "" && date != ""
    }



    console.log("gender e':" + gender)
    return <>
        <div className="card dark-card p-3">
            <div className="row g-3">
                <div className="col-md-6">
                    <label htmlFor="inputName" className="form-label">Nome</label>
                    <input onChange={(e) => {
                        handleName(e.target.value)
                    }}
                        type="text"
                        className="form-control"
                        id="inputName"
                        value={personName}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputSurname" className="form-label">Cognome</label>
                    <input onChange={(e) => {
                        handleSurname(e.target.value)
                    }}
                        type="text"
                        className="form-control"
                        id="inputSurname"
                        value={personSurame}
                    />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputGender" className="form-label">Gender</label>
                    <select onChange={(e) => {
                        handleGender(e.target.value)
                    }}
                        id="inputGender"
                        className="form-select"
                        value={gender}
                    >
                        <option value="">Choose...</option>
                        <option value="M">Maschio</option>
                        <option value="F">Femmina</option>
                        <option value="T">Trans</option>
                        <option value="NB">Non Binario</option>
                    </select>
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputData" className="form-label">Anno</label>
                    <input onChange={(e) => {
                        handleDate(e.target.value)
                    }}
                        type="text"
                        className="form-control"
                        id="inputData"
                        value={date}
                    />
                </div>
                <div className="col-md-2">
                    <label htmlFor="inputUsername" className="form-label">User Name</label>
                    <input onChange={(e) => {
                        handleUserName(e.target.value)
                    }}
                        type="text"
                        className="form-control"
                        id="inputUsername"
                        value={userName}
                    />
                </div>

                <div className="col-md-2">
                    <label htmlFor="inputLocation" className="form-label">Location</label>
                    <input onChange={(e) => {
                        handleLocation(e.target.value)
                    }}
                        type="text"
                        className="form-control"
                        id="inputLocation"
                        value={location}
                    />
                </div>

                <div className="col-12">
                    <button className="btn btn-primary"
                        onClick={() => {
                            const condizione = isFormValid()

                            if (isFormValid()) {
                                const newPerson = {
                                    name: personName,
                                    surname: personSurame,
                                    date: date,
                                    gender: gender,
                                    userName: userName,
                                    location: location
                                }
                                onNewPerson(newPerson)
                                clearForm()
                            } else {
                                alert("alcuni campi non sono stati inseriti")
                            }


                        }}
                    >Aggiungi</button>
                </div>
            </div>
        </div>


    </>
}

export default NewPersonForm;
