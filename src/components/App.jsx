import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import uuidv4 from 'uuid/v4';
import Notification from './Notification/Notification';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import '../transitions/slide-appear.css';
import popTransition from '../transitions/pop.module.css';

const containerStyles = {
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 355,
  fontFamily: 'Roboto',
};

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
    showNotify: false,
    notifyText: '',
  };

  componentDidMount() {
    const existedData = localStorage.getItem('contacts');

    if (existedData) {
      try {
        const contacts = JSON.parse(existedData);
        this.setState({
          contacts,
        });
      } catch {
        // eslint-disable-next-line no-alert
        alert('Something went wrong...');
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;

    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  addContact = (name, number) => {
    const { contacts } = this.state;

    const newContact = {
      name,
      number,
      id: uuidv4(),
    };

    const existedContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );

    let message;

    if (existedContact) {
      message = `${name} is already in contacts`;
      this.showNotifyWithMessage(message);
    } else if (name && number) {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
        showNotify: false,
      }));
    } else {
      message = 'Please fill the empty fields';
      this.showNotifyWithMessage(message);
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onFilterChange = e => {
    this.setState({
      filter: e.target.value,
    });
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  showNotifyWithMessage = text => {
    this.setState({
      showNotify: true,
      notifyText: text,
    });
    setTimeout(() => {
      this.setState({ showNotify: false });
    }, 2500);
  };

  render() {
    const { filter, contacts, showNotify, notifyText } = this.state;
    const filteredContacts = this.filterContacts(contacts, filter);

    return (
      <div style={containerStyles}>
        <CSSTransition in timeout={500} classNames="slide" appear>
          <h2>Phonebook</h2>
        </CSSTransition>

        <TransitionGroup>
          {showNotify && (
            <CSSTransition timeout={250} classNames={popTransition}>
              <Notification text={notifyText} />
            </CSSTransition>
          )}
        </TransitionGroup>

        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <TransitionGroup>
          {contacts.length > 1 && (
            <CSSTransition timeout={250} classNames={popTransition}>
              <Filter
                filterValue={filter}
                onFilterChange={this.onFilterChange}
              />
            </CSSTransition>
          )}
        </TransitionGroup>

        <ContactList
          filteredContacts={filteredContacts}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
