import Statistic from "./Statistic";

function PeopleStats(
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

  //per ogni persona presente dentro people fai il calcolo dell'età
  var age = persons.map((people) => calculateAge(people.date))
  //calcolo della persona più grande e più piccola
  var elder = Math.max(...age)
  var younger = Math.min(...age)

  console.log("il piu grande ha:" + elder)

  persons.sort((a, b) => {
    return b.date - a.date
  })

  var elderPeople = persons[persons.length - 1]
  var yungerPeople = persons[0]

  //filtro sul genere maschile
  const males = persons.filter((person) => person.gender == "M")

  const maleCount = males.length
  //filtro sul genere femminile
  const femaleCount = persons.filter((person) => person.gender == "F").length
  //filtro per le persone con sesso diverso da maschio e femmina o ch non inseriscano il sesso
  const otherCount = persons.filter((person) => !["M", "F"].includes(person.gender) || person.gender == "").length
  //filtro per le persone che non inseriscono il sesso
  const nonDispCount = persons.filter((person) => person.gender == "").length


  return <div className="card mt-3">
    <div className="text-center">
      <div className="card-body">
        <h1>Statistiche</h1>

        {
          persons.length == 0 ?
            <p>non ci sono persone da visualizzare</p>

            : <><p>la persona piu' grande e' {elderPeople.name} e ha {calculateAge(elderPeople.date)} anni</p>
              <p>la persona piu' piccola e' {yungerPeople.name} e ha {calculateAge(yungerPeople.date)} anni</p>
              <p>Numero di persone di sesso maschile: {maleCount}</p>
              <p>Numero di persone di sesso femminile: {femaleCount}</p>
              <p>Numero di persone di altri generi : {otherCount}</p>
              <p>Numero di persone che non hanno inserito il sesso: {nonDispCount}</p></>
        }

        <Statistic
          persons={persons}
        />

      </div>
    </div>
  </div>


}


export default PeopleStats;