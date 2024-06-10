import { useState } from "react";
import NewPersonForm from "./components/NewPersonForm";
import PersonList from "./components/PersonList";



function ListNameApp() {

    const [items, setItems] = useState([])


    const handleNewList = (newPersonToAdd) => {

        var itemscopy = items.slice()

        newPersonToAdd.id = items.length + 1;
        itemscopy.push(newPersonToAdd);
        setItems(itemscopy)
    }

    return <div className="widget-app">

        <PersonList
            persons={items}

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