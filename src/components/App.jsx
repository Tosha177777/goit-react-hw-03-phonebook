import React, { Component } from 'react';
import Contacts from './Form/Contacts';
import Title from 'components/Title/Title';
import ContactList from './ContactList/ContactItemRender';
import Filter from './Filter/Filter';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  onDelete = name => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.name !== name),
    }));
  };

  handleContact = newContact => {
    console.dir(newContact.name);
    if (
      this.state.contacts.some(
        name => name.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
      return;
    } else if (!newContact.name || !newContact.number) {
      alert('Fill the form');
      return;
    }

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  onFilterChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
    return (
      <div>
        <Title title={'Phonebook'}>
          <Contacts handleContact={this.handleContact} />
        </Title>
        <Title title={'Contacts'}>
          <Filter filter={filter} onFilterChange={this.onFilterChange} />
          <ContactList contacts={filteredContacts} onDelete={this.onDelete} />
        </Title>
      </div>
    );
  }
}
