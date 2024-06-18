import { useState } from "react";
import NewPersonForm from "./components/NewPersonForm";
import SearchBar from "./components/SearchBar";
import PersonListAdvanced from "./components/PersonListAdvanced";
import Bigger from "./components/PeopleStats";
import PeopleStats from "./components/PeopleStats";



function ListNameApp() {

    const [items, setItems] = useState([

        {
            id: "1",
            name: "Domenico",
            surname: "Lella",
            date: "2003",
            gender: "M",
            userName: "Domenico_lel"
        },
        {
            id: "2",
            name: "Giuseppe",
            surname: "Rossi",
            date: "2010",
            gender: "F",
            userName: "GiuseppeRossi98"
        },
        {
            id: "3",
            name: "Giovanna",
            surname: "Verdi",
            date: "1986",
            gender: "T",
            userName: "GiovannaVerdi98"
        }
    ])

    const [displayItems, setDisplayItems] = useState(items)



    // Funzione per gestire l'aggiunta di una nuova persona all'elenco
    const handleNewList = (newPersonToAdd) => {

        var itemscopy = items.slice()

        // assegno l'id alla nuova persona che andrò ad aggiungere
        newPersonToAdd.id = items.length + 1;
        // aggiunge la nuova persona all' array 
        itemscopy.push(newPersonToAdd);
        setItems(itemscopy)
        setDisplayItems(itemscopy)
    }

    function isPeopleMatched(item, searchWords) {
        return item.name.toLocaleLowerCase().includes(searchWords.toLocaleLowerCase()) ||
            item.surname.toLocaleLowerCase().includes(searchWords.toLocaleLowerCase())
    }

    // controllo dell'input sul nome o cognome 
    const handleFilterPerson = (searchWords) => {
        const trimSearchWords = searchWords.trim()

        if (trimSearchWords == "") {
            setDisplayItems(items)
        } else {
            const filteredItems = items.filter((item) => isPeopleMatched(item, trimSearchWords))

            setDisplayItems(filteredItems)
        }
    }

    // funzione per gestire la rimozione di una persona
    const handleDelete = (peopleIdToRemove) => {
        var itemscopy = items.slice()
        const index = itemscopy.findIndex(people => people.id == peopleIdToRemove)
        itemscopy.splice(index, 1)
        setItems(itemscopy)
        setDisplayItems(itemscopy)
    }
    console.log("elenco persone in memoria: " + JSON.stringify(items))

    return <div className="p-4">
        <div className="row">
            <div className="col-8">
                {items.length} persone
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
            persons={displayItems}
            onPersonDelete={
                (peopleId) => {
                    handleDelete(peopleId)
                }
            }

        />
        <NewPersonForm
            onNewPerson={
                (newPerson) => {
                    handleNewList(newPerson)
                }
            }
        />

        <PeopleStats
            persons={items}
        />
    </div>

}

export default ListNameApp;