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

  function isListEmpty() {
    return persons.length == 0
  }

  //funzione per ricavare la maggior eta' in base agli anni presi in input
  // e colorarli in base alla maggior eta' o meno

  // dichiarazione funzione per la maggiore eta'
  function isAdult(age) {
    return age >= 18
  }
  //assegno il risultato di una funzione a una costante 
  const age = isAdult(18)



    //stampare M o F prendendo i dati da un input e stamparli nella tabella.


  return <div className="task-list">
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
                <div>{people.surname}</div>
              </td>
              <td>
                <div>{people.date}</div>
              </td>
              <td>
                <div style={{color: isAdult(peopleAge) ? "green" : "red"}}>{peopleAge}</div>
              </td>
            </tr>

          }

        )
      }
    </table>

  </div>
}

export default PersonList;
