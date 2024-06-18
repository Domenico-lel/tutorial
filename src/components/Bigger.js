function Bigger(
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


  return <div className="card mt-3">
    <div className="text-center">
      <div className="card-body">
        <h1>Statistiche</h1>
        <p>la persona piu' grande e' {elderPeople.name} e ha {calculateAge(elderPeople.date)} anni</p>
        <p>la persona piu' piccola e' {yungerPeople.name} e ha {calculateAge(yungerPeople.date)} anni</p>
      </div>
    </div>
  </div>


}

//aggiungere il conteggio dell epersone di sesso maschile, di quello femminile e dei rimanenti, cioe' che non sono ne maschioi e ne femmina
//e rinominare bigger in PeopleStats


export default Bigger;