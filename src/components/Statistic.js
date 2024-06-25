function Statistic(
  {
    persons = []
  }
) {
  // Calcolo del numero di persone per ogni genere
  const maleCount = persons.filter((person) => person.gender == "M").length
  const femaleCount = persons.filter((person) => person.gender == "F").length
  const notSetGenderCount = persons.filter((person) => person.gender == "").length
  const otherCount = persons.filter((person) => !["M", "F"].includes(person.gender)).length

  // Calcolo del numero totale delle persone
  const totalCount = persons.length

  // Calcolo delle percentuali
  const malePercentage = totalCount ? (maleCount / totalCount) * 100 : 0
  const femalePercentage = totalCount ? (femaleCount / totalCount) * 100 : 0
  const otherPercentage = totalCount ? (notSetGenderCount / totalCount) * 100 : 0
  const otherGenderPercentage = totalCount ? (otherCount / totalCount) * 100 : 0

  return <>
    <div className="progress mb-2" role="progressbar" aria-label="Male percentage" aria-valuenow={malePercentage} aria-valuemin="50" aria-valuemax="100">
      <div className="progress-bar bg-info text-dark" style={{ width: `${malePercentage}%` }}>
        {malePercentage}% Maschi
      </div>
    </div>
    <div className="progress mb-2" role="progressbar" aria-label="Female percentage" aria-valuenow={femalePercentage} aria-valuemin="0" aria-valuemax="100">
      <div className="progress-bar bg-success text-dark" style={{ width: `${femalePercentage}%` }}>
        {femalePercentage}% Femmine
      </div>
    </div>
    <div className="progress mb-2" role="progressbar" aria-label="Other percentage" aria-valuenow={otherGenderPercentage} aria-valuemin="0" aria-valuemax="100">
      <div className="progress-bar bg-danger text-dark" style={{ width: `${otherGenderPercentage}%` }}>
        {otherGenderPercentage}% Percentuale persone di altri generi
      </div>
    </div>
    <div className="progress mb-2" role="progressbar" aria-label="Other percentage" aria-valuenow={otherPercentage} aria-valuemin="0" aria-valuemax="100">
      <div className="progress-bar bg-warning text-dark" style={{ width: `${otherPercentage}%` }}>
        {otherPercentage}% Non ha inserito il sesso
      </div>
    </div>
  </>

}

export default Statistic;
