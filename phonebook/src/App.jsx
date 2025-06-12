import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import PersonsForm from "./components/PersonsForm";
import Persons from "./components/Persons";
import services from "./services/services";
const Header = ({ text }) => {
  return <h1>{text}</h1>;
};
const App = () => {
  const [value, setValue] = useState("");
  const [contacts, setContact] = useState([]);
  const [numValue, setNumValue] = useState("");
  const [filter, setFilter] = useState("");
  useEffect(() => {
    services.getAll().then((result) => setContact(result));
  }, []);
  const handleNumber = (event) => {
    const number = event.target.value;
    setNumValue(number);
  };
  const handleChange = (event) => {
    const newValue = event.target.value;
    setValue(newValue);
  };
  const handleClick = (e) => {
    e.preventDefault()
    const user = contacts.find((contact) => contact.name === value);
    const newContact = { name: value, number: numValue };
    if (!user) {
      services
        .create(newContact)
        .then((result) => setContact(contacts.concat(result)));
    } else {
      //alert(`do you want to update ${value}'s number`)
      services
      .update(user.id,{...user,number:numValue})
      .then(result => {
        setContact((contacts.filter(contact => contact.name!==user.name)).concat(result.data))
      })
    }
    setValue("");
    setNumValue("");
  };
  // const newContacts =
  const handleFilter = (event) => {
    setFilter(event.target.value);
  };

  const filteredContacts = contacts.filter((contact) => {
    return contact.name.includes(filter);
  });
  const handleDelete = (id) => {
    if (window.confirm(`Do you want to delete this number`)) {
      services.remove(id).then((result) => {
        setContact(contacts.filter((contact) => contact.id !== result.data.id));
      });
    }
  };
  const renderedContacts = filter ? filteredContacts : contacts;
  return (
    <>
      <Filter handleFilter={handleFilter} />
      <Header text={"PhoneBook"} />
      <PersonsForm
        value={value}
        handleChange={handleChange}
        numValue={numValue}
        handleNumber={handleNumber}
        handleClick={handleClick}
      />
      <Header text={"Contacts"} />
      <Persons
        renderedContacts={renderedContacts}
        handleDelete={handleDelete}
      />
    </>
  );
};
export default App;
