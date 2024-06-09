import NewPersonForm from "./components/NewPersonForm";
import PersonList from "./components/PersonList";

function ListNameApp() {
  return (
    <div className="widget-app">
      <PersonList />
      <NewPersonForm />
    </div>
  );
}

export default ListNameApp;