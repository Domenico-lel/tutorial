import { useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function Map(
  {
    persons = []
  }
) {
  const position = [41.8933203, 12.4829321]

  const [locations, setLocations] = useState([
    {
      title: "Marina Di Ginosa",
      lat: 40.421844,
      long: 16.874995
    },
    {
      title: "Matera",
      lat: 40.666379,
      long: 16.604320
    },
  ])


  //https://nominatim.openstreetmap.org/search?addressdetails=1&q=berlin&format=jsonv2&limit=1
  async function getLatLongFromLocationName(cityName) {
    return await fetch(`https://nominatim.openstreetmap.org/search?addressdetails=1&q=${cityName}&format=jsonv2&limit=1`)
      .then(res => res.json())
      .then((data) => {
        console.log(JSON.stringify(data))
        return [data[0].lat, data[0].lon]
      })
  }

  const loadLocations = async () => {
    let calculatedLocation = []


    let data = await Promise.all(persons.map(
      async (person) => {
        const cordinates = await getLatLongFromLocationName(person.location)

        console.log("cordinates" + JSON.stringify(cordinates))
        //istanza di un nuovo oggetto di tipo location 
        var newLocation = {
          title: person.name + " " + person.surname,
          lat: cordinates[0],
          long: cordinates[1],
        }
        //pusho nell' array di calculatedLocation con la funzione .push
        calculatedLocation.push(newLocation)
      }
    ))

    console.log("calculateLoation:" + JSON.stringify(calculatedLocation))
    setLocations(calculatedLocation)
  }

  if (locations.length != persons.length) {
    loadLocations()
  }

  console.log("le persone sono:" + persons)

  return <div className="card mt-3">
    <div className="card-body h-100">
      <MapContainer style={{ height: 400 }} center={position} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />


        {
          locations.map(
            (location) => {

              //return [data[0].lat, data[0].lon]

              return <Marker position={[location.lat, location.long]}>
                <Popup>
                  <p>{location.title}</p>
                </Popup>
              </Marker>
            }
          )
        }
      </MapContainer>
    </div>
  </div>
}


export default Map;