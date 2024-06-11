function PersonCardGroup(
  {
    persons = [],
    onPersonDelete = () => { }
  }
) {

  function getCurrentYear() {
    return new Date().getFullYear();
  }

  function calculateAge(birthYear) {
    return getCurrentYear() - birthYear;
  }

  function getGenderLabel(gender) {
    switch (gender) {
      case "F":
        return "Femmina"
      case "M":
        return "Maschio"
      case "T":
        return "Trans"
      case "NB":
        return "Non Binario"
        
      default:
        return "Non Disp"
        break;
    }
  }

  function isListEmpty() {
    return persons.length == 0
  }

  const handleDelete = (peopleId) => {
    console.log("richiesta di cancellazione persona con id:" + peopleId)
    onPersonDelete(peopleId)
  }

  //funzione per ricavare la maggior eta' in base agli anni presi in input
  // e colorarli in base alla maggior eta' o meno
  function isAdult(age) {
    return age >= 18
  }
  //assegno il risultato di una funzione a una costante 
  const age = isAdult(18)


  return <div className="row row-cols-1 row-cols-md-3 g-4 pb-3" style={{ width: "100%", display: (isListEmpty()) ? "none" : null }}>
    {isListEmpty() &&
      <p>Nessun utente aggiunto...</p>
    }

    {
      persons.map(
        (people) => {

          const peopleAge = calculateAge(people.date)

          return <div className="col" key={people.id}>
            <div className="card">
              <div className="text-center" >
                <img className="pt-2" width="100" src="https://avatar.iran.liara.run/public" />
              </div>
              <div className="card-body">
                <h5 className="card-title">{people.name} {people.surname}</h5>
                <p style={{ color: isAdult(peopleAge) ? "green" : "red" }}>{peopleAge}</p>
                <p className="card-text">{getGenderLabel(people.gender)}</p>
                <p className="card-text">@{people.userName}</p>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleDelete(people.id)}
                >Delete</button>
              </div>
              <div className="card-footer">
                <small className="text-body-secondary">{people.date}</small>
              </div>
            </div>
          </div>
        }
      )
    }
  </div>
}

export default PersonCardGroup;
