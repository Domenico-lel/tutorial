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

  var age = persons.map((people) => calculateAge(people.date))
  var elder = Math.max(...age)
  var younger = Math.min(...age)

  console.log("il piu grande ha:" + elder)

  persons.sort((a, b) => {
    return b.date - a.date
  })

  var elderPeople = persons[persons.length - 1]
  var yungerPeople = persons[0]

  console.log("il primo oggetto e':" + JSON.stringify(persons))

  const maleCount = persons.filter((person) => person.gender == "M").length
  const femaleCount = persons.filter((person) => person.gender == "F").length
  const otherCount = persons.filter((person) => !["M", "F", "Non disp"].includes(person.gender)).length
  //const otherCountNew = persons.filter((person) => person.gender.includes("M") & person.gender.includes("F") & person.gender.includes("N")).length

  return <div className="card mt-3">
    <div className="text-center">
      <div className="card-body">
        <h1>Statistiche</h1>
        <p>la persona piu' grande e' {elderPeople.name} e ha {calculateAge(elderPeople.date)} anni</p>
        <p>la persona piu' piccola e' {yungerPeople.name} e ha {calculateAge(yungerPeople.date)} anni</p>
        <p>Numero di persone di sesso maschile: {maleCount}</p>
        <p>Numero di persone di sesso femminile: {femaleCount}</p>
        <p>Numero di persone di altri generi : {otherCount}</p>
      </div>
    </div>
  </div>


}

//aggiungere il conteggio delle persone di sesso maschile, di quello femminile e dei rimanenti
//e rinominare bigger in PeopleStats


export default PeopleStats;