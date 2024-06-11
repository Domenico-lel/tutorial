function PersonList(
  {
    persons = []
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

  //funzione per ricavare la maggior eta' in base agli anni presi in input
  // e colorarli in base alla maggior eta' o meno
  function isAdult(age) {
    return age >= 18
  }
  //assegno il risultato di una funzione a una costante 
  const age = isAdult(18)


  return <div className="">
    {isListEmpty() &&
      <p>Nessun utente aggiunto...</p>
    }


    <table style={{ width: "100%", display: (isListEmpty()) ? "none" : null }}>
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Surname</td>
        <td>Year of birth</td>
        <td>Age</td>
        <td>Gender</td>
      </tr>

      {
        persons.map(
          (people) => {

            const peopleAge = calculateAge(people.date)

            return <tr key={people.id}>
              <td>
                <h3>{people.id}</h3>
              </td>
              <td>
                <h3>{people.name}</h3>
              </td>
              <td>
                <h3>{people.surname}</h3>
              </td>
              <td>
                <h3>{people.date}</h3>
              </td>
              <td>
                <h3 style={{ color: isAdult(peopleAge) ? "green" : "red" }}>{peopleAge}</h3>
              </td>
              <td>
                <h3>{getGenderLabel(people.gender)}</h3>
              </td>
            </tr>

          }

        )
      }
    </table>

  </div>
}

export default PersonList;
