import { useState } from "react";
import NewPersonForm from "./components/NewPersonForm";
import SearchBar from "./components/SearchBar";
import PersonListAdvanced from "./components/PersonListAdvanced";
import PeopleStats from "./components/PeopleStats";
import Map from "./components/Map";
import Statistic from "./components/Statistic";



function ListNameApp() {

    const [items, setItems] = useState([

        {
            id: "1",
            name: "Domenico",
            surname: "Lella",
            date: "2003",
            gender: "M",
            userName: "Domenico_lel",
            location: "Ginosa Marina"
        },
        {
            id: "2",
            name: "Giuseppina",
            surname: "Rossi",
            date: "2010",
            gender: "F",
            userName: "GiuseppinaRossi98",
            location: "Milano"
        },
        {
            id: "3",
            name: "Armando",
            surname: "Verdi",
            date: "1986",
            gender: "T",
            userName: "ArmandoVerdi63",
            location: "Roma"
        },
        {
            id: "4",
            name: "Ivana",
            surname: "Alfredi",
            date: "1999",
            gender: "NB",
            userName: "IvanaAlfredi21",
            location: "Bergamo"
        },
        {
            id: "5",
            name: "Anna",
            surname: "Giovinazzo",
            date: "1991",
            gender: "",
            userName: "AnnaGiovinazzo21",
            location: "Firenze"
        }
    ])

    const [searchWords, setSearchWords] = useState("")



    // Funzione per gestire l'aggiunta di una nuova persona all'elenco
    const handleNewPerson = (newPersonToAdd) => {
        console.log(items)

        var itemscopy = items.slice()

        // genera l'id in base alla posizione in cui si dovrà trovare (il nuovo elemento) nell'array
        newPersonToAdd.id = items.length + 1;
        // aggiunge la nuova persona all' array 
        itemscopy.push(newPersonToAdd);
        setItems(itemscopy)
        //setDisplayItems(itemscopy)
    }

    function isPeopleMatched(item, searchWords) {
        return item.name.toLocaleLowerCase().includes(searchWords.toLocaleLowerCase()) ||
            item.surname.toLocaleLowerCase().includes(searchWords.toLocaleLowerCase())
    }

    // controllo dell'input sul nome o cognome 
    const handleFilterPerson = (searchWords) => {
        const trimSearchWords = searchWords.trim()

        setSearchWords(trimSearchWords)
    }

    // funzione per gestire la rimozione di una persona
    const handleDelete = (peopleIdToRemove) => {
        var itemscopy = items.slice()
        const index = itemscopy.findIndex(people => people.id == peopleIdToRemove)
        itemscopy.splice(index, 1)
        setItems(itemscopy)
    }
    console.log("elenco persone in memoria: " + JSON.stringify(items))

    const filteredItems = items.filter((item) => isPeopleMatched(item, searchWords))

    const itemsCount = filteredItems.length




    // x risultati per la ricerca Y 
    return <div className="p-4">
        <div className="row">
            <div className="col-8">
                {
                    searchWords == "" ?
                        <>{items.length} persone</>

                        : <>{itemsCount} persone</>
                }
            </div>
            <div className="col-4">
                <SearchBar
                    onNewSearch={
                        (searchWords) => {
                            handleFilterPerson(searchWords)
                            console.log("searcInput viene stampato: " + searchWords)
                        }
                    }
                />
            </div>
        </div>

        <PersonListAdvanced
            persons={filteredItems}
            onPersonDelete={
                (peopleId) => {
                    handleDelete(peopleId)
                }
            }

        />
        <NewPersonForm
            onNewPerson={
                (newPerson) => {
                    handleNewPerson(newPerson)
                }
            }
        />

        <PeopleStats
            persons={items}
        />

        <Map
            persons={items}
        />
    </div>

}

export default ListNameApp;