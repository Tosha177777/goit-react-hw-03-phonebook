const ContactItem = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <p>
              {contact.name}: {contact.number}
            </p>
            <button type="button" onClick={() => onDelete(contact.name)}>
              Delete &times;
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default ContactItem;
