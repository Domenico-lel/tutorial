import { useState } from "react";
import NewPersonForm from "./components/NewPersonForm";
import PersonCardGroup from "./components/PersonCardGroup";
import SearchBar from "./components/SearchBar";



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
        }
    ])

    // Funzione per gestire l'aggiunta di una nuova persona all'elenco
    const handleNewList = (newPersonToAdd) => {

        var itemscopy = items.slice()

        newPersonToAdd.id = items.length + 1;
        itemscopy.push(newPersonToAdd);
        setItems(itemscopy)
    }

    const handleFilterPerson = (searchWords) => {
        
    }

    const handleDelete = (peopleIdToRemove) => {
        var itemscopy = items.slice()
        const index = itemscopy.findIndex(people => people.id == peopleIdToRemove)
        itemscopy.splice(index, 1)
        setItems(itemscopy)
    }

    return <div className="p-4">
        <div className="row">
            <div className="col-8">
                {items.length} persone
            </div>
            <div className="col-4">
                <SearchBar 
                    onNewSearch={
                        (searchWords) => {
                            console.log("searcInput viene stampato: " + searchWords)
                        }
                    }
                />
            </div>
        </div>

        <PersonCardGroup
            persons={items}
            onPersonDelete={
                (peopleId) => handleDelete(peopleId)
            }

        />
        <NewPersonForm
            onNewPerson={
                (newPerson) => {
                    handleNewList(newPerson)
                }
            }
        />
    </div>

}

export default ListNameApp;