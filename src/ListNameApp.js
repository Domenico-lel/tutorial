import { useState } from "react";
import NewPersonForm from "./components/NewPersonForm";
import SearchBar from "./components/SearchBar";
import PersonListAdvanced from "./components/PersonListAdvanced";
import Bigger from "./components/PeopleStats";
import PeopleStats from "./components/PeopleStats";
import DemoUseEffect from "./components/DemoUseEffect";



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
            name: "Armando",
            surname: "Verdi",
            date: "1986",
            gender: "T",
            userName: "ArmandoVerdi63"
        },
        {
            id: "4",
            name: "Ivana",
            surname: "Alfredi",
            date: "1999",
            gender: "NB",
            userName: "IvanaAlfredi21"
        }
    ])

    const [searchWords, setSearchWords] = useState("")



    // Funzione per gestire l'aggiunta di una nuova persona all'elenco
    const handleNewPerson = (newPersonToAdd) => {

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
            persons={items.filter((item) => isPeopleMatched(item, searchWords))}
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

        <DemoUseEffect 
            persons={items}
        />   
    </div>

}

export default ListNameApp;