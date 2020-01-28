import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import T from 'prop-types';
import ContactItem from './ContactItem';
import styles from './ContactList.module.css';
import popTransition from '../../transitions/pop.module.css';

const ContactList = ({ filteredContacts, onDeleteContact }) => (
  <TransitionGroup component="ul" className={styles.list}>
    {filteredContacts.map(contact => (
      <CSSTransition key={contact.id} timeout={250} classNames={popTransition}>
        <ContactItem
          contact={contact}
          onDeleteContact={() => onDeleteContact(contact.id)}
        />
      </CSSTransition>
    ))}
  </TransitionGroup>
);

ContactList.propTypes = {
  filteredContacts: T.arrayOf(
    T.shape({
      name: T.string.isRequired,
      number: T.string.isRequired,
      id: T.string.isRequired,
    }),
  ).isRequired,
  onDeleteContact: T.func.isRequired,
};

export default ContactList;
