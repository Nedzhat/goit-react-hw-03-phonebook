import { GlobalStyle } from 'components/GlobalStyle';
import React, { Component } from 'react';
import { Box } from './Box';
import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { MainTitle, SecondTitle } from './App.styled';

export class App extends Component {
  state = {
  contacts: [],
  filter: '',
  }

  addContact = (name, number) => {
    if (this.state.contacts.find(contact =>
      contact.name.toLowerCase() === name.toLowerCase())) {
      alert(`Sorry, but ${name} is already in contacts!`)
      return;
    }
    const newContact = {
        id: nanoid(),
        name,
        number,
    };
    
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  }

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };

  changeFilter = e => {
    this.setState({
      filter: e.currentTarget.value,
    });
  }

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({
        contacts: parsedContacts,
      })
    }
  }

  componentDidUpdate(prevProps, prevState) {
  
    if (this.state.contacts !== prevState.contacts) {
    localStorage.setItem("contacts", JSON.stringify(this.state.contacts))
  }
    
  }
  render() {

    const normalizedFilter = this.state.filter.toLowerCase();
    const visibleContacts = this.state.contacts.filter(contact => {
      return contact.name.toLowerCase().includes(normalizedFilter)
    })

    return <Box margin="50px auto 50px" padding="30px" width="500px" height="100%" border="normal" boxShadow="0px 4px 24px -1px rgba(0,0,0,0.75)" borderRadius="15px" backgroundColor="bgTable">
      <GlobalStyle/>
      <MainTitle>Phonebook</MainTitle>
      <ContactForm onSubmit={this.addContact}/>
      <SecondTitle>Contacts</SecondTitle>
      <Filter text="Find contacts by name" onChange={this.changeFilter} />
      <ContactList visibleContacts={visibleContacts} deleteContact={this.deleteContact}/>
    </Box>
};
};