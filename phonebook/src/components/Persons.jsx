const Persons = ({renderedContacts,handleDelete})=>{
  return(
      <ul>
        {renderedContacts.map((contact) => (
          <li key={contact.id}>
            {contact.name} {contact.number}
            <button onClick={()=>handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
  )
}
export default Persons;