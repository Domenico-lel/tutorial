function PersonList(
  {
    persons = []
  }
) {
  return <div className="task-list">
    <h5>PersonList</h5>

    <table style={{ width: "100%" }}>
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Surname</td>
        <td>Year of birth</td>
      </tr>

      {
        persons.map(
          (people) => {
            return (
              <tr>
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
              </tr>
            )
          }
        )
      }

    </table>
  </div>
}

export default PersonList;
